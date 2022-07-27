import { newSpecPage } from '@stencil/core/testing';
import { MedBadge } from '../med-badge';

describe('med-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedBadge],
      html: `<med-badge></med-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <med-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-badge>
    `);
  });
});
