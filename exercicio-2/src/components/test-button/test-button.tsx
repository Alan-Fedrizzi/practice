import { Component, Host, h, Prop } from '@stencil/core';
import { generateClasses } from '../../utils/utils';

@Component({
  tag: 'test-button',
  styleUrl: 'test-button.scss',
  shadow: true,
})
export class TestButton {
  @Prop() size?: string;
  @Prop() color?: string;

  render() {
    return (
      <Host
        class={generateClasses(null, {
          'test-button': true,
          [`test-button--${this.size}`]: this.size !== undefined,
          [`test-button--${this.color}`]: this.color !== undefined,
        })}
      >
        <button class="test-button__tag">
          <slot></slot>
        </button>
      </Host>
    );
  }
}
