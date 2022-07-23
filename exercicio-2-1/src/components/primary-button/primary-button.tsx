import { Component, Host, h, Prop } from '@stencil/core';
import { generateClasses } from '../../utils/utils';

@Component({
  tag: 'primary-button',
  styleUrl: 'primary-button.scss',
  shadow: true,
})
export class PrimaryButton {
  @Prop() expand?: string;
  @Prop() size?: string;
  @Prop() disabled = false;

  render() {
    return (
      <Host
        class={generateClasses(null, {
          'primary-button': true,
          [`primary-button--${this.expand}`]: this.expand !== undefined,
          [`primary-button--${this.size}`]: this.size !== undefined,
          'primary-button--disabled': this.disabled,
        })}
      >
        <button class="primary-button__default">
          <slot name="start"></slot>
          <slot></slot>
          <slot name="end"></slot>
        </button>
      </Host>
    );
  }
}
