import { Component, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'tokes-modal',
  styleUrl: 'tokes-modal.less',
})
export class TokesModal {
  @Prop() active: boolean;
  @Prop() metaStyle: string;

  render() {
    const { metaStyle, active } = this;
    return (
      <div class="modal-wrapper" onClick={e => e.stopPropagation()}>
        <div class={classNames('modal-window', metaStyle, { active })}>
          <modal-banner metaStyle={metaStyle} active={active} />
          <slot />
        </div>
      </div>
    );
  }
}
