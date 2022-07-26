import { newSpecPage } from '@stencil/core/testing';
import { BadgeTest } from '../badge-test';

describe('badge-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BadgeTest],
      html: `<badge-test></badge-test>`,
    });
    expect(page.root).toEqualHtml(`
      <badge-test>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </badge-test>
    `);
  });
});
