import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../utils/utils';

@Component({
  tag: 'med-badge',
  styleUrl: 'med-badge.scss',
  shadow: true,
})
export class MedBadge {
  @Prop() size?: string;
  @Prop() name?: string;

  render() {
    return (
      <Host
        class={generateMedColor(null, {
          'med-badge': true,
          [`med-badge--${this.size}`]: this.size !== undefined,
          [`med-badge--${this.name}`]: this.name !== undefined,
        })}
      >
        <div class="med-badge__default">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
