import { Component, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'tokes-payments'
})
export class TokesPayments {
  @Element() el: HTMLStencilElement;

  @State() showModal: boolean = false;
  
  /**
   * API Key for merchant
   */
  @Prop() apiKey: string;

  /**
   * Reference ID for order
   */
  @Prop() referenceId: string;

  /**
   * URL to lookup payment data
   */
  @Prop() url: string;

  /**
   * Total price in USD for order
   */
  @Prop() usd: number;

  closeModal() {
    this.showModal = false;
  }

  render() {
    const { url, apiKey, referenceId, usd, closeModal } = this;
    return (
      <div>
        <button class="tokes-button" onClick={() => this.showModal = true}>Pay with Tokes</button>
          {this.showModal && 
          <payment-portal
            url={url}
            apiKey={apiKey}
            referenceId={referenceId}
            usd={usd}
            closeModal={closeModal.bind(this)}
          />}
      </div>
    )
  }
}
