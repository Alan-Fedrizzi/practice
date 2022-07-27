import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../utils/utils';

@Component({
  tag: 'med-button',
  styleUrl: 'med-button.scss',
  shadow: true,
})
export class MedButton {
  @Prop() expand?: string;
  @Prop() size?: string;
  @Prop() name?: string;
  @Prop() disabled = false;
  @Prop() color?: string;

  render() {
    return (
      <Host
        class={generateMedColor(this.color, {
          'med-button': true,
          [`med-button--${this.expand}`]: this.expand !== undefined,
          [`med-button--${this.size}`]: this.size !== undefined,
          [`med-button--${this.name}`]: this.name !== undefined,
          'med-button--disabled': this.disabled,
        })}
      >
        <button class="med-button__tag">
          <slot name="start"></slot>
          <slot></slot>
          <slot name="end"></slot>
        </button>
      </Host>
    );
  }
}
