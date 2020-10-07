import { PaymentProviderDictionary, Order, Payment, PaymentStatus } from './types';

export const paymentProviders: PaymentProviderDictionary = {
  TKS: {
    name: 'Tokes',
    id: 'TKS',
    active: true,
    type: 'crypto',
    icon: '../assets/icons/provider-logo-TKS.svg',
  },
  BTC: {
    name: 'Bitcoin',
    id: 'BTC',
    active: true,
    type: 'crypto',
    icon: '../assets/icons/provider-logo-BTC.svg',
  },
  LTC: {
    name: 'Litecoin',
    id: 'LTC',
    active: true,
    type: 'crypto',
    icon: '../assets/icons/provider-logo-LTC.svg',
  },
  DASH: {
    name: 'Dash',
    id: 'DASH',
    active: true,
    type: 'crypto',
    icon: '../assets/icons/provider-logo-DASH.svg',
  },
  WAVES: {
    name: 'Waves',
    id: 'WAVES',
    active: true,
    type: 'crypto',
    icon: '../assets/icons/provider-logo-WAVES.svg',
  },
  XTZ: {
    name: 'Tezos',
    id: 'XTZ',
    active: true,
    type: 'crypto',
    icon: '../assets/icons/provider-logo-XTZ.svg',
  },
  ETH: {
    name: 'Ethereum',
    id: 'ETH',
    active: true,
    type: 'crypto',
    icon: '../assets/icons/provider-logo-ETH.svg',
  },
};

export const kTokenDecimals = {
  BTC: 8,
  LTC: 8,
  DASH: 8,
  WAVES: 8,
  TKS: 8,
  ETH: 18,
  XTZ: 6,
}

export const statusIcons = {
  clock: '../assets/icons/clock.svg',
  check: '../assets/icons/check.svg',
}

export const kAssetIds = {
  TKS: 'ATrsNse6UZwNSMruNKsR4bnoTsp89BvLMmBZECRcPoif',
  WAVES: 'WAVES',
};

export const watchInterval = 2500;

export const orderDefault: Order = {
  id: null,
  currency: 'TKS',
  reference_id: null,
  last_payment_id: null,
  total: 0.00,
}

export const paymentDefault: Payment = {
  currency: 'TKS',
  payment_address: null,
  payment_status_id: PaymentStatus.Unpaid,
}
