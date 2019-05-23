import { newE2EPage } from '@stencil/core/testing';

describe('currency-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<currency-modal></currency-modal>');
    const element = await page.find('currency-modal');
    expect(element).toHaveClass('hydrated');
  });
});