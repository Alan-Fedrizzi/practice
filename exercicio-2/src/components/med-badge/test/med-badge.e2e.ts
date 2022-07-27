import { newE2EPage } from '@stencil/core/testing';

describe('med-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-badge></med-badge>');

    const element = await page.find('med-badge');
    expect(element).toHaveClass('hydrated');
  });
});
