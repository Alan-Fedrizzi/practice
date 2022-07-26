import { Component, Host, h, Prop } from '@stencil/core';
import { generateClasses } from '../../utils/utils';

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
        class={generateClasses(null, {
          'progress-bar': true,
        })}
      >
        <div class="progress-bar__default">&nbsp;</div>
      </Host>
    );
  }
}
