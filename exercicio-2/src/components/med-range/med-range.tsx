import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../utils/utils';

@Component({
  tag: 'med-range',
  styleUrl: 'med-range.scss',
  shadow: true,
})
export class MedRange {
  @Prop() porcentagem?: string;
  @Prop() color?: string;

  render() {
    return (
      <Host
        class={generateMedColor(this.color, {
          'med-range': true,
        })}
      >
        <div class="med-range__default">
          <svg class="med-range__icon">
            <use xlinkHref="symbol-defs.svg#icon-knob"></use>
          </svg>
        </div>
      </Host>
    );
  }
}
