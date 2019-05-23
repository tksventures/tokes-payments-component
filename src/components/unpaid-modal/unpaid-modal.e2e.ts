import { newE2EPage } from '@stencil/core/testing';

describe('unpaid-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<unpaid-modal></unpaid-modal>');
    const element = await page.find('unpaid-modal');
    expect(element).toHaveClass('hydrated');
  });
});