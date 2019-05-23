import { newE2EPage } from '@stencil/core/testing';

describe('tokes-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<tokes-modal></tokes-modal>');
    const element = await page.find('tokes-modal');
    expect(element).toHaveClass('hydrated');
  });
});
