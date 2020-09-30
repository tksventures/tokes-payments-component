import { Component, Prop, Element, Event, EventEmitter, State, h } from '@stencil/core';
import QRCode from 'qrcode-generator';

import Tunnel from '../config';
import { uriFormat } from '../../utils/utils';
import { NavState, Order, Payment, PaymentStatus } from '../../types';

@Component({
  tag: 'unpaid-modal',
  styleUrl: 'unpaid-modal.less'
})
export class UnpaidModal {
  @Element() modal: HTMLElement;
  @State() qrCodeData: string;
  @Prop() apiKey: string;
  @Prop() orderData: Order;
  @Prop() paymentData: Payment;
  @Prop() referenceId: string;
  @Prop() url: string;
  @Event() exit: EventEmitter;
  @Event() navigate: EventEmitter;

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
      var qr = QRCode(0, 'H')
      qr.addData(paymentURL);
      qr.make();
      this.qrCodeData = qr.createSvgTag({ margin: 0, scalable: true });
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

    if (!this.qrCodeData) {
      this.updateQrCode();
    }

    return [
      <tokes-modal>
        <h1 class="amount-title small-title">Amount owed: {rates[currency]} {currency}</h1>
        <div class="modal-separator" />
        <div class="modal-body">
          <p class="modal-title">Scan QR Code Below to Complete Payment<br />
            <aside class="modal-subtitle">Or send {rates[currency]} {currency} to: <br />{payment_address}</aside>
          </p>
          <div class="modal-qr" innerHTML={this.qrCodeData} />
          <div class="payment-status">UNPAID</div>
        </div>
        <div class="modal-separator end-separator" />
        <div class="modal-footer">
          <modal-button action={() => this.exit.emit()} metaStyle="danger">Cancel</modal-button>
          <modal-button action={() => this.navigate.emit(NavState.Setup)} metaStyle="primary">Back</modal-button>
        </div>
      </tokes-modal>
    ]
  }
}

Tunnel.injectProps(UnpaidModal, ['url', 'apiKey', 'referenceId', 'orderData', 'paymentData']);
