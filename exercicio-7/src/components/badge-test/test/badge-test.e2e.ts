import { newE2EPage } from '@stencil/core/testing';

describe('badge-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<badge-test></badge-test>');

    const element = await page.find('badge-test');
    expect(element).toHaveClass('hydrated');
  });
});
