import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../utils/utils';

@Component({
  tag: 'med-chart-radial',
  styleUrl: 'med-chart-radial.scss',
  shadow: true,
})
export class MedChartRadial {
  @Prop() success?: string;
  @Prop() warning?: string;
  @Prop() size?: string;

  render() {
    return (
      <Host
        class={generateMedColor(null, {
          'med-chart-radial': true,
          [`med-chart-radial--${this.size}`]: this.size !== undefined,
        })}
      >
        <div class="med-chart-radial__external">
          <div class="med-chart-radial__internal">
            <span class="med-chart-radial__number">100</span>
            <span class="med-chart-radial__text">Questões</span>
          </div>
        </div>
      </Host>
    );
  }
}
