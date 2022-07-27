import { newSpecPage } from '@stencil/core/testing';
import { MedDownload } from '../med-download';

describe('med-download', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedDownload],
      html: `<med-download></med-download>`,
    });
    expect(page.root).toEqualHtml(`
      <med-download>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-download>
    `);
  });
});
