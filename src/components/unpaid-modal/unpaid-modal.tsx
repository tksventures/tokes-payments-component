import { Component, Prop, Element, Event, EventEmitter, State, h } from '@stencil/core';
import QRCode from 'qrcode-generator';

import Tunnel from '../config';
import { uriFormat } from '../../utils/utils';
import { NavState, Order, Payment, PaymentStatus } from '../../types';
import styles from '../styles';

@Component({
  tag: 'unpaid-modal',
  styleUrl: 'unpaid-modal.less'
})
export class UnpaidModal {
  @Element() modal: HTMLElement;
  @State() qrCodeData: string;
  @State() statusMessage: string;
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

  copyToClipboard(str: string, type: string) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    this.statusMessage = `${type} Copied to Clipboard`;
    setTimeout(() => {
      this.statusMessage = null;
    }, 1000);
  }

  render() {
    const { orderData, paymentData, statusMessage } = this;
    if (!orderData || !paymentData || !orderData.rates || !paymentData.payment_address) {
      return <tokes-modal><h1 class="amount-title">Loading...</h1></tokes-modal>
    }

    const { currency, payment_address } = paymentData;
    const { rates } = orderData;

    if (!this.qrCodeData) {
      this.updateQrCode();
    }

    const titleMessage = statusMessage || 'Scan QR Code Below to Complete Payment';
    const titleColor = statusMessage ? styles.colors.widgetGreen : styles.colors.blackLight;
    return [
      <tokes-modal>
        <h1 class="amount-title small-title" style={{cursor: 'pointer'}} onClick={() => this.copyToClipboard(rates[currency], 'Payment Amount')}>
          Amount owed: {rates[currency]} {currency}
        </h1>
        <div class="modal-separator" />
        <div class="modal-body">
          <p class="modal-title" style={{color: titleColor}}>{titleMessage}<br />
            <aside class="modal-subtitle">
              <div onClick={() => this.copyToClipboard(rates[currency], 'Payment Amount')}>Or send {rates[currency]} {currency} to:</div>
              <div onClick={() => this.copyToClipboard(payment_address, 'Blockchain Address')}>{payment_address}</div>
            </aside>
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
