import { newE2EPage } from '@stencil/core/testing';

describe('tokes-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<tokes-button></tokes-button>');
    const element = await page.find('tokes-button');
    expect(element).toHaveClass('hydrated');
  });
});
