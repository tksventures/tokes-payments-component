import { Component, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'modal-button',
  styleUrl: 'modal-button.less',
})
export class ModalButton {
  @Prop() metaStyle: string;
  @Prop() action: () => void;

  render() {
    return (
      <div onClick={this.action} class={classNames("modal-button", this.metaStyle)}>
        <slot />
      </div>
    );
  }
}
