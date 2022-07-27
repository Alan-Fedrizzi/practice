import { newSpecPage } from '@stencil/core/testing';
import { MedProgress } from '../med-progress';

describe('med-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedProgress],
      html: `<med-progress></med-progress>`,
    });
    expect(page.root).toEqualHtml(`
      <med-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-progress>
    `);
  });
});
