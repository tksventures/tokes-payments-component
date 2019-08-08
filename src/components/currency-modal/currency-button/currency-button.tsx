import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

import { paymentProviders } from '../../../constants';

@Component({
  tag: 'currency-button',
  styleUrl: 'currency-button.less',
})
export class CurrencyButton {
  @Prop() currency: string = 'TKS';
  @Prop() isSelected: boolean = false;
  @Prop() onCurrencySelect: (currency: string) => void;

  render() {
    const { name, icon } = paymentProviders[this.currency];
    return [
      <div class="currency-container">
        <div onClick={() => this.onCurrencySelect(this.currency)} class={classNames('currency-button', { 'currency-selected': this.isSelected})}>
          <img class="currency-icon" src={icon}/>
        </div>
        <aside class={classNames('currency-subtitle', { 'currency-selected': this.isSelected})}>{name}</aside>
      </div>
    ]
  }
}
