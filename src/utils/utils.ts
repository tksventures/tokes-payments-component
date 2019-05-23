import { kAssetIds } from '../constants';
import { Payment, Rates } from '../types';

export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function uriFormat(payment: Payment, rates: Rates): string {
  return {
    TKS: `https://client.wavesplatform.com/#send/${kAssetIds.TKS}?recipient=${payment.payment_address}&amount=${rates.TKS}`,
    BTC: `bitcoin:${payment.payment_address}?amount=${rates.BTC}`,
    LTC: `litecoin:${payment.payment_address}?amount=${rates.LTC}`,
    DASH: `dash:${payment.payment_address}?amount=${rates.DASH}`,
  }[payment.currency];
}

export function tokenNumber(amount: number, decimals: number = 8): number {
  if (!amount) return 0;

  return amount * (10 ** decimals);
}

export function tokenDecimal(amount: number, decimals: number = 8): number {
  if (!amount) return 0;

  return amount / (10 ** decimals);
}

export function referenceId(refId: string): string {
  if (!refId) return '-';
  return refId.substr(0, 5).toUpperCase();
}

export function keyForValue(obj: object, value: any): string {
  let keyName = null;
  Object.keys(obj).forEach((key) => {
    if (obj[key] === value) {
      keyName = key;
      return false;
    }
    return true;
  });
  return keyName;
}
