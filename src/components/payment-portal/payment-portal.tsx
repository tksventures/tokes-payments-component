import { Component, Prop, State, Listen } from '@stencil/core';

import Tunnel from '../config';
import { orderStatus, paymentRequest } from '../../lib/payments';
import { NavState, Order, Payment, PaymentStatus } from '../../types';
import { watchInterval, orderDefault, paymentDefault } from '../../constants';

@Component({
  tag: 'payment-portal',
  styleUrl: 'payment-portal.css',
})
export class PaymentPortal {
  /**
   * URL to lookup payment data
   */
  @Prop() url: string;

  /**
   * API Key for merchant
   */
  @Prop() apiKey: string;

  /**
   * Order ID for previously setup order
   */
  @Prop() referenceId: string;

  /**
   * Total price in USD for order
   */
  @Prop() usd: number;

  /**
   * Close payment portal
   */
  @Prop() closeModal: () => void;

  @State() watcher: any;
  @State() orderData: Order = null;
  @State() paymentData: Payment = null;
  @State() navState: NavState = NavState.Initialize;
  @State() statusMessage: string;

  async componentDidLoad() {
    await this.initOrder();
    this.initWatcher();
  }

  /**
   * Retrieve order data. If it doesn't exist, populate defaults.
   */
  async initOrder() {
    if (this.orderData) return Promise.reject('Order already initalized');

    const { url, apiKey, referenceId, usd } = this;
    try {
      const { success, order, payment } = await orderStatus(url, apiKey, referenceId);
      if (!success) {
        this.orderData = orderDefault;
        this.orderData.total = usd;
        this.orderData.reference_id = referenceId;
        this.paymentData = paymentDefault;
        return this.navigate(NavState.Setup);
      }

      this.orderData = order;
      this.paymentData = payment;

      if (payment.payment_status_id !== PaymentStatus.Unpaid) {
        return this.navigate(NavState.Complete);
      }

      return this.navigate(NavState.Setup)
    } catch (er) {
      console.error(er);
      this.orderData = orderDefault;
      this.paymentData = paymentDefault;
      return this.totalFailure('Failed to connect to Payment server');
    }
  }

  initWatcher() {
    if (this.watcher) return;

    this.watcher = setInterval(() => {
      const { paymentData } = this;
      if (paymentData) {
        const { payment_status_id } = paymentData;

        if ([
          PaymentStatus.Unpaid,
          PaymentStatus.Processing,
          PaymentStatus.Paid,
          PaymentStatus.Confirmed,
        ].includes(payment_status_id)) {
          this.refreshOrder();
        }
      }
    }, watchInterval);
  }

  selectCurrency(currency) {
    const { orderData } = this;
    if (currency === orderData.currency) return;
    this.orderData = { ...orderData, currency };
  }

  /**
   * Create or update the order and include item data
   */
  async registerOrder() {
    const items = [
      {
        name: "Custom Amount",
        price: this.orderData.total,
      }
    ];

    this.orderData.items = items;
    try {
      const { success, order, payment, message } = await paymentRequest(this.url, this.apiKey, this.orderData);
      if (!success) {
        return this.totalFailure(message);
      }

      this.orderData = order;
      this.paymentData = payment;

      return this.navigate(NavState.Pay);
    } catch {
      return this.totalFailure('Failed to connect to Payment server');
    }
  }

  /**
   * Get the latest order and payment data
   */
  async refreshOrder() {
    const { url, apiKey, referenceId } = this;
    try {
      const { success, order, payment } = await orderStatus(url, apiKey, referenceId);
      if (success) {
        this.orderData = order;
        this.paymentData = payment;
      }

      return true;
    } catch (er) {
      console.error(er);
      return false;
    }
  }

  totalFailure(message: string): void {
    this.statusMessage = message;
    this.paymentData.payment_status_id = PaymentStatus.Failed;
    this.navigate(NavState.Complete);
  }

  @Listen('navigate')
  navigateEvent(event: CustomEvent) {
    this.navigate(event.detail);
  }

  navigate(navState: NavState) {
    this.navState = navState;
  }

  @Listen('exit')
  exit() {
    this.closeModal();
  }

  render() {
    const { navState, url, apiKey, referenceId, orderData, paymentData, statusMessage } = this;
    return (
      <div class="portal-background" onClick={() => this.closeModal()}>
        <Tunnel.Provider state={{ 
          url,
          apiKey,
          referenceId,
          orderData,
          paymentData,
        }}>
          {navState === NavState.Setup &&
            <currency-modal 
              selectCurrency={this.selectCurrency.bind(this)}
              registerOrder={this.registerOrder.bind(this)} />}
          {navState === NavState.Pay && 
            <unpaid-modal />}
          {navState === NavState.Complete && 
            <paid-modal statusMessage={statusMessage} />}
          {navState === NavState.Disconnected && 
            <div class="error-message">{statusMessage}</div>}
        </Tunnel.Provider>
      </div>
    );
  }
}
