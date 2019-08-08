import { Component, Prop, Element, Event, EventEmitter, State, h } from '@stencil/core';
import QRCode from 'qrcode';

import Tunnel from '../config';
import { uriFormat } from '../../utils/utils';
import { NavState, Order, Payment, PaymentStatus } from '../../types';

@Component({
  tag: 'unpaid-modal',
  styleUrl: 'unpaid-modal.less'
})
export class UnpaidModal {
  @Element() modal: HTMLElement;
  @Prop() apiKey: string;
  @Prop() orderData: Order;
  @Prop() paymentData: Payment;
  @Prop() referenceId: string;
  @Prop() url: string;
  @Event() exit: EventEmitter;
  @Event() navigate: EventEmitter;
  @State() qrCodeData: string;

  componentDidUpdate() {
    const { paymentData } = this;
    if (paymentData && paymentData.payment_status_id !== PaymentStatus.Unpaid) {
      this.navigate.emit(NavState.Complete);
    }
    this.updateQrCode();
  }

  async updateQrCode() {
    const { paymentData, orderData } = this;
    if (!paymentData) return;

    const paymentURL = uriFormat(paymentData, orderData.rates);

    try {
      this.qrCodeData = await QRCode.toDataURL(paymentURL, { width: 250, margin: 0 });
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { orderData, paymentData } = this;
    if (!orderData || !paymentData || !orderData.rates || !paymentData.payment_address) {
      return <tokes-modal><h1 class="amount-title">Loading...</h1></tokes-modal>
    }

    const { currency, payment_address } = paymentData;
    const { rates } = orderData;

    return [
      <tokes-modal>
        <h1 class="amount-title">Amount owed: {rates[currency]} {currency}</h1>
        <div class="modal-separator" />
        <div class="modal-body">
          <p class="modal-title">Scan QR Code Below to Complete Payment<br />
            <aside class="modal-subtitle">Or send {rates[currency]} {currency} to: <br />{payment_address}</aside>
          </p>
          <div class="modal-qr">
            <img src={this.qrCodeData} alt="QR Code" />
          </div>
          <div class="payment-status">UNPAID</div>
        </div>
        <div class="modal-separator" />
        <div class="modal-footer">
          <modal-button action={() => this.exit.emit()} metaStyle="danger">Cancel</modal-button>
          <modal-button action={() => this.navigate.emit(NavState.Setup)} metaStyle="primary">Back</modal-button>
        </div>
      </tokes-modal>
    ]
  }
}

Tunnel.injectProps(UnpaidModal, ['url', 'apiKey', 'referenceId', 'orderData', 'paymentData']);
