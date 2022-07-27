import { newE2EPage } from '@stencil/core/testing';

describe('med-download', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-download></med-download>');

    const element = await page.find('med-download');
    expect(element).toHaveClass('hydrated');
  });
});
