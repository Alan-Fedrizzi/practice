import { newE2EPage } from '@stencil/core/testing';

describe('med-range', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-range></med-range>');

    const element = await page.find('med-range');
    expect(element).toHaveClass('hydrated');
  });
});
