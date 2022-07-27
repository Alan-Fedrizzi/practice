import { newE2EPage } from '@stencil/core/testing';

describe('med-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-progress></med-progress>');

    const element = await page.find('med-progress');
    expect(element).toHaveClass('hydrated');
  });
});
