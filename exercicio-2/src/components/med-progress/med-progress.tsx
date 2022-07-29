import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../utils/utils';

@Component({
  tag: 'med-progress',
  styleUrl: 'med-progress.scss',
  shadow: true,
})
export class MedProgress {
  @Prop() porcentagem?: string;
  @Prop() color?: string;

  render() {
    return (
      <Host
        class={generateMedColor(this.color, {
          'med-progress': true,
        })}
      >
        <div class="med-progress__default">&nbsp;</div>
      </Host>
    );
  }
}
