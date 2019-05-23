import { Component, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'tokes-button',
})
export class TokesButton {
  @Element() el: HTMLStencilElement;

  /**
   * URL to lookup payment data
   */
  @Prop() url: string;

  /**
   * API Key for merchant
   */
  @Prop() apiKey: string;

  /**
   * Reference ID for order
   */
  @Prop() referenceId: string;

  /**
   * Total price in USD for order
   */
  @Prop() usd: number;

  @State() showModal: boolean = false;

  closeModal() {
    this.showModal = false;
  }

  render() {
    const { url, apiKey, referenceId, usd, closeModal } = this;
    return (
      <div>
        <button onClick={() => this.showModal = true}>Pay with Tokes</button>
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
