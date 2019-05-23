import { newE2EPage } from '@stencil/core/testing';

describe('paid-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<paid-modal></paid-modal>');
    const element = await page.find('paid-modal');
    expect(element).toHaveClass('hydrated');
  });
});