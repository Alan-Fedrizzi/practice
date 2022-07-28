import { newSpecPage } from '@stencil/core/testing';
import { MedRange } from '../med-range';

describe('med-range', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedRange],
      html: `<med-range></med-range>`,
    });
    expect(page.root).toEqualHtml(`
      <med-range>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-range>
    `);
  });
});
