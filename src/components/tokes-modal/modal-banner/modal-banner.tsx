import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'modal-banner',
  styleUrl: 'modal-banner.less',
})
export class ModalBanner {
  @Prop() active: boolean;
  @Prop() metaStyle: string;

  render() {
    const { active } = this;
    return (
      <div class={classNames("modal-banner", this.metaStyle, { active })}>
        <img class="modal-banner-icon" src="../assets/icons/mv-logo.svg" />
        <div class="modal-banner-title">PAY WITH CRYPTO</div>
        <div class="modal-banner-subtitle">POWERED BY MULTICHAIN VENTURES</div>
      </div>
    );
  }
}
