import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core';

import Tunnel from '../config';
import { Order } from '../../types';
import { paymentProviders } from '../../constants';

@Component({
  tag: 'currency-modal',
  styleUrl: 'currency-modal.less',
})
export class CurrencyModal {
  @Element() modal: CurrencyModal;
  @Prop() apiKey: string;
  @Prop() orderData: Order = null;
  @Prop() referenceId: string;
  @Prop() registerOrder: () => void;
  @Prop() selectCurrency: (currency: string) => void;
  @Prop() url: string;
  @Event() exit: EventEmitter;

  render() {
    return [
      <tokes-modal>
        <h1 class="amount-title">Amount owed: ${this.orderData.total.toFixed(2)}</h1>
        <div class="modal-separator" />
        <p class="modal-title">Select Payment Method</p>
        <div class="currency-button-wrapper">
          {this.orderData && Object.values(paymentProviders).map(provider => (
            <currency-button 
              currency={provider.id} 
              isSelected={this.orderData.currency === provider.id}
              onSelect={this.selectCurrency}
            />
          ))}
          <div class="placeholder-option" />
        </div>
        <div class="modal-separator" />
        <div class="modal-footer">
          <modal-button action={() => this.exit.emit()} metaStyle="danger">Cancel</modal-button>
          <modal-button action={this.registerOrder} metaStyle="success">Next</modal-button>
        </div>
      </tokes-modal>
    ]
  }
}

Tunnel.injectProps(CurrencyModal, ['url', 'apiKey', 'referenceId', 'orderData']);
