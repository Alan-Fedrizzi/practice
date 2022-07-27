import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../utils/utils';

@Component({
  tag: 'progress-bar',
  styleUrl: 'progress-bar.scss',
  shadow: true,
})
export class ProgressBar {
  @Prop() porcentagem?: string;

  render() {
    return (
      <Host
        class={generateMedColor(null, {
          'progress-bar': true,
        })}
      >
        <div class="progress-bar__default">&nbsp;</div>
      </Host>
    );
  }
}
