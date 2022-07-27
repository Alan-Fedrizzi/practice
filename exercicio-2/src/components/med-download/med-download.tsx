import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../utils/utils';

@Component({
  tag: 'med-download',
  styleUrl: 'med-download.scss',
  shadow: true,
})
export class MedDownload {
  @Prop() state?: string;
  @Prop() size?: string;
  @Prop() porcentagem?: string;

  render() {
    return (
      <Host
        class={generateMedColor(null, {
          'med-download': true,
          [`med-download--${this.state}`]: this.state !== undefined,
          [`med-download--${this.size}`]: this.size !== undefined,
        })}
      >
        <button class="med-download__button">
          <div class="med-download__external">
            <div class="med-download__internal">
              <svg class="med-download__icon med-download__icon--arrow">
                <use xlinkHref="symbol-defs.svg#icon-arrow-down"></use>
              </svg>
              <svg class="med-download__icon med-download__icon--stop">
                <use xlinkHref="symbol-defs.svg#icon-rectangle"></use>
              </svg>
            </div>
          </div>
        </button>
      </Host>
    );
  }
}
