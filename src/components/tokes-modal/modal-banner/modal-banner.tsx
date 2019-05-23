import { Component, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'modal-banner',
  styleUrl: 'modal-banner.less',
})
export class ModalBanner {
  @Prop() metaStyle: string;
  @Prop() active: boolean;

  render() {
    const { active } = this;
    return (
      <div class={classNames("modal-banner", this.metaStyle, { active })}>
        <img class="modal-banner-icon" src="../assets/icons/provider-logo-TKS.svg" />
        <div class="modal-banner-title">BUY WITH CRYPTO</div>
        <div class="modal-banner-subtitle">POWERED BY TOKES PLATFORM</div>
      </div>
    );
  }
}
