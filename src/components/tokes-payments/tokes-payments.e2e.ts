import { newE2EPage } from '@stencil/core/testing';

describe('tokes-payments', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<tokes-payments></tokes-payments>');
    const element = await page.find('tokes-payments');
    expect(element).toHaveClass('hydrated');
  });
});
