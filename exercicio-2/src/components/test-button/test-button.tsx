import { Component, Host, h, Prop } from '@stencil/core';
import { generateClasses } from '../../utils/utils';

@Component({
  tag: 'test-button',
  styleUrl: 'test-button.scss',
  shadow: true,
})
export class TestButton {
  @Prop() expand?: string;
  @Prop() size?: string;
  @Prop() name?: string;
  @Prop() disabled = false;

  render() {
    return (
      <Host
        class={generateClasses(null, {
          'test-button': true,
          [`test-button--${this.expand}`]: this.expand !== undefined,
          [`test-button--${this.size}`]: this.size !== undefined,
          [`test-button--${this.name}`]: this.name !== undefined,
          'test-button--disabled': this.disabled,
        })}
      >
        <button class="test-button__tag">
          <slot name="start"></slot>
          <slot></slot>
          <slot name="end"></slot>
        </button>
      </Host>
    );
  }
}
