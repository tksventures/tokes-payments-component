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
};

export const statusIcons = {
  clock: '../assets/icons/clock.svg',
  check: '../assets/icons/check.svg',
}

export const kAssetIds = {
  TKS: 'BDMRyZsmDZpgKhdM7fUTknKcUbVVkDpMcqEj31PUzjMy',
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
