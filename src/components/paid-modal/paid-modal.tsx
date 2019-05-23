import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core';

import Tunnel from '../config';
import { statusIcons } from '../../constants';
import { tokenDecimal } from '../../utils/utils';
import { NavState, Order, Payment, PaymentStatus } from '../../types';

@Component({
  tag: 'paid-modal',
  styleUrl: 'paid-modal.less',
})
export class PaidModal {
  @Element() modal: HTMLElement;
  @Prop() url: string;
  @Prop() apiKey: string;
  @Prop() referenceId: string;
  @Prop() orderData: Order;
  @Prop() paymentData: Payment;
  @Prop() statusMessage: string;
  @Event() navigate: EventEmitter;
  @Event() exit: EventEmitter;

  componentDidLoad() {
    const { paymentData } = this;
    if (paymentData && paymentData.payment_status_id !== PaymentStatus.Unpaid) {
      this.navigate.emit(NavState.Complete);
    }
  }

  statusIcon(status) {
    const { clock, check } = statusIcons;
    return {
      [PaymentStatus.Unpaid]: clock,
      [PaymentStatus.Processing]: clock,
      [PaymentStatus.Confirmed]: check,
      [PaymentStatus.Paid]: check,
      [PaymentStatus.Settled]: check,
      [PaymentStatus.Failed]: clock,
      [PaymentStatus.Archived]: clock,
      [PaymentStatus.Cancelled]: clock,
    }[status];
  }

  modalStyle(status) {
    return {
      [PaymentStatus.Processing]: 'modal-primary',
      [PaymentStatus.Confirmed]: 'modal-success',
      [PaymentStatus.Paid]: 'modal-success',
      [PaymentStatus.Settled]: 'modal-success',
      [PaymentStatus.Failed]: 'modal-danger',
      [PaymentStatus.Archived]: 'modal-info',
      [PaymentStatus.Cancelled]: 'modal-danger',
    }[status];
  }

  buttonStyle(status) {
    return status === PaymentStatus.Failed ? 'primary' : 'danger';
  }

  amountStatus(status) {
    if (status === PaymentStatus.Failed) return 'Failed';
    return status === PaymentStatus.Processing ? 'Processing' : 'Paid';
  }

  txStatus(status, txId) {
    if (status === PaymentStatus.Failed) return this.statusMessage;
    return txId ? 'Transaction ID' : 'Confirmation times vary...';
  }

  render() {
    const { orderData, paymentData } = this;
    if (!orderData || !paymentData) {
      return <tokes-modal><h1 class="amount-title">Loading...</h1></tokes-modal>
    }

    const { currency, payment_status_id, payment_amount, tx_id } = paymentData;
    const paymentStatusMessage = this.amountStatus(payment_status_id);

    return [
      <tokes-modal active metaStyle={this.modalStyle(payment_status_id)}>
        <h1 class="amount-title">Amount {paymentStatusMessage}: {tokenDecimal(payment_amount).toFixed(8)} {currency}</h1>
        <div class="modal-separator" />
        <div class="modal-body">
          <p class="modal-title">Payment {paymentStatusMessage}<br />
            <aside class="modal-subtitle">{this.txStatus(payment_status_id, tx_id)}<br />{tx_id}</aside>
          </p>
          <img class="modal-icon" src={this.statusIcon(payment_status_id)} />
          <div class="payment-status">{PaymentStatus[payment_status_id]}</div>
        </div>
        <div class="modal-separator" />
        <div class="modal-footer">
          <modal-button action={() => this.exit.emit()} metaStyle={this.buttonStyle(payment_status_id)}>Close</modal-button>
        </div>
      </tokes-modal>
    ]
  }
}

Tunnel.injectProps(PaidModal, ['url', 'apiKey', 'referenceId', 'orderData', 'paymentData']);
