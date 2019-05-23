import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core';

import Tunnel from '../config';
import { uriFormat } from '../../utils/utils';
import { NavState, Order, Payment, PaymentStatus } from '../../types';

@Component({
  tag: 'unpaid-modal',
  styleUrl: 'unpaid-modal.less'
})
export class UnpaidModal {
  @Element() modal: HTMLElement;
  @Prop() url: string;
  @Prop() apiKey: string;
  @Prop() referenceId: string;
  @Prop() orderData: Order;
  @Prop() paymentData: Payment;
  @Event() navigate: EventEmitter;
  @Event() exit: EventEmitter;

  componentDidUpdate() {
    const { paymentData } = this;
    if (paymentData && paymentData.payment_status_id !== PaymentStatus.Unpaid) {
      this.navigate.emit(NavState.Complete);
    }
  }

  render() {
    const { orderData, paymentData } = this;
    if (!orderData || !paymentData || !orderData.rates || !paymentData.payment_address) {
      return <tokes-modal><h1 class="amount-title">Loading...</h1></tokes-modal>
    }

    const { currency, payment_address } = paymentData;
    const { rates } = orderData;
    const paymentURL = encodeURIComponent(uriFormat(paymentData, rates));
    const paymentQRCode = `https://api.qrserver.com/v1/create-qr-code/?data=${paymentURL}&size=250x250`;

    return [
      <tokes-modal>
        <h1 class="amount-title">Amount owed: {rates[currency]} {currency}</h1>
        <div class="modal-separator" />
        <div class="modal-body">
          <p class="modal-title">Scan QR Code Below to Complete Payment<br />
            <aside class="modal-subtitle">Or send {rates[currency]} {currency} to: <br />{payment_address}</aside>
          </p>
          <div class="modal-qr">
            <img src={paymentQRCode} alt="QR Code" />
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
