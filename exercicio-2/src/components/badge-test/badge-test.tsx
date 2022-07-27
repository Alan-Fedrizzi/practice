import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../utils/utils';

@Component({
  tag: 'badge-test',
  styleUrl: 'badge-test.scss',
  shadow: true,
})
export class BadgeTest {
  @Prop() size?: string;
  @Prop() name?: string;

  render() {
    return (
      <Host
        class={generateMedColor(null, {
          'badge-test': true,
          [`badge-test--${this.size}`]: this.size !== undefined,
          [`badge-test--${this.name}`]: this.name !== undefined,
        })}
      >
        <div class="badge-test__default">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
