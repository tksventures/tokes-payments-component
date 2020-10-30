export enum PaymentStatus {
  Unpaid,
  Processing,
  Confirmed,
  Paid,
  Settled,
  Archived,
  Cancelled,
  Failed,
}

export enum NavState {
  Initialize,
  Setup,
  Pay,
  Complete,
  Disconnected,
}

export type MarketRate = string | number;

export interface Rates {
  TKS: MarketRate,
  BTC?: MarketRate,
  LTC?: MarketRate,
  DASH?: MarketRate,
  WAVES?: MarketRate,
  XTZ?: MarketRate,
  ETH?: MarketRate,
  USDT?: MarketRate,
  USDC?: MarketRate,
  TUSD?: MarketRate,
}

export interface Order {
  id: string
  reference_id: string,
  last_payment_id: string,
  currency: string,
  total: number,
  rates?: Rates,
  [key: string]: number | string | object,
}

export interface Payment {
  payment_address: string,
  currency: string,
  payment_status_id: PaymentStatus,
  payment_amount?: number,
  tx_id?: string,
  [key: string]: number | string,
}

export interface PaymentProvider {
  name: string,
  id: string,
  active: boolean,
  type: string,
  icon: string,
}

export interface PaymentProviderDictionary {
  [key: string]: PaymentProvider
}
