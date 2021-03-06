import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'tokes-payments'
})
export class TokesPayments {
  @State() showModal: boolean = false;
  
  /**
   * API Key for merchant
   */
  @Prop() apiKey: string;

  /**
   * Button disabled parameter
   */
  @Prop() disabled: boolean = false;

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
        <button disabled={this.disabled} class="tokes-button" onClick={() => this.showModal = true}>
          <slot name="button-content" />
        </button>
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
