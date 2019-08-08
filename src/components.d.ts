/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Order,
  Payment,
} from './types';

export namespace Components {
  interface CurrencyButton {
    'currency': string;
    'isSelected': boolean;
    'onCurrencySelect': (currency: string) => void;
  }
  interface CurrencyModal {
    'apiKey': string;
    'orderData': Order;
    'referenceId': string;
    'registerOrder': () => void;
    'selectCurrency': (currency: string) => void;
    'url': string;
  }
  interface ModalBanner {
    'active': boolean;
    'metaStyle': string;
  }
  interface ModalButton {
    'action': () => void;
    'metaStyle': string;
  }
  interface PaidModal {
    'apiKey': string;
    'orderData': Order;
    'paymentData': Payment;
    'referenceId': string;
    'statusMessage': string;
    'url': string;
  }
  interface PaymentPortal {
    /**
    * API Key for merchant
    */
    'apiKey': string;
    /**
    * Close payment portal
    */
    'closeModal': () => void;
    /**
    * Order ID for previously setup order
    */
    'referenceId': string;
    /**
    * URL to lookup payment data
    */
    'url': string;
    /**
    * Total price in USD for order
    */
    'usd': number;
  }
  interface TokesModal {
    'active': boolean;
    'metaStyle': string;
  }
  interface TokesPayments {
    /**
    * API Key for merchant
    */
    'apiKey': string;
    /**
    * Reference ID for order
    */
    'referenceId': string;
    /**
    * URL to lookup payment data
    */
    'url': string;
    /**
    * Total price in USD for order
    */
    'usd': number;
  }
  interface UnpaidModal {
    'apiKey': string;
    'orderData': Order;
    'paymentData': Payment;
    'referenceId': string;
    'url': string;
  }
}

declare global {


  interface HTMLCurrencyButtonElement extends Components.CurrencyButton, HTMLStencilElement {}
  var HTMLCurrencyButtonElement: {
    prototype: HTMLCurrencyButtonElement;
    new (): HTMLCurrencyButtonElement;
  };

  interface HTMLCurrencyModalElement extends Components.CurrencyModal, HTMLStencilElement {}
  var HTMLCurrencyModalElement: {
    prototype: HTMLCurrencyModalElement;
    new (): HTMLCurrencyModalElement;
  };

  interface HTMLModalBannerElement extends Components.ModalBanner, HTMLStencilElement {}
  var HTMLModalBannerElement: {
    prototype: HTMLModalBannerElement;
    new (): HTMLModalBannerElement;
  };

  interface HTMLModalButtonElement extends Components.ModalButton, HTMLStencilElement {}
  var HTMLModalButtonElement: {
    prototype: HTMLModalButtonElement;
    new (): HTMLModalButtonElement;
  };

  interface HTMLPaidModalElement extends Components.PaidModal, HTMLStencilElement {}
  var HTMLPaidModalElement: {
    prototype: HTMLPaidModalElement;
    new (): HTMLPaidModalElement;
  };

  interface HTMLPaymentPortalElement extends Components.PaymentPortal, HTMLStencilElement {}
  var HTMLPaymentPortalElement: {
    prototype: HTMLPaymentPortalElement;
    new (): HTMLPaymentPortalElement;
  };

  interface HTMLTokesModalElement extends Components.TokesModal, HTMLStencilElement {}
  var HTMLTokesModalElement: {
    prototype: HTMLTokesModalElement;
    new (): HTMLTokesModalElement;
  };

  interface HTMLTokesPaymentsElement extends Components.TokesPayments, HTMLStencilElement {}
  var HTMLTokesPaymentsElement: {
    prototype: HTMLTokesPaymentsElement;
    new (): HTMLTokesPaymentsElement;
  };

  interface HTMLUnpaidModalElement extends Components.UnpaidModal, HTMLStencilElement {}
  var HTMLUnpaidModalElement: {
    prototype: HTMLUnpaidModalElement;
    new (): HTMLUnpaidModalElement;
  };
  interface HTMLElementTagNameMap {
    'currency-button': HTMLCurrencyButtonElement;
    'currency-modal': HTMLCurrencyModalElement;
    'modal-banner': HTMLModalBannerElement;
    'modal-button': HTMLModalButtonElement;
    'paid-modal': HTMLPaidModalElement;
    'payment-portal': HTMLPaymentPortalElement;
    'tokes-modal': HTMLTokesModalElement;
    'tokes-payments': HTMLTokesPaymentsElement;
    'unpaid-modal': HTMLUnpaidModalElement;
  }
}

declare namespace LocalJSX {
  interface CurrencyButton extends JSXBase.HTMLAttributes<HTMLCurrencyButtonElement> {
    'currency'?: string;
    'isSelected'?: boolean;
    'onCurrencySelect'?: (currency: string) => void;
  }
  interface CurrencyModal extends JSXBase.HTMLAttributes<HTMLCurrencyModalElement> {
    'apiKey'?: string;
    'onExit'?: (event: CustomEvent<any>) => void;
    'orderData'?: Order;
    'referenceId'?: string;
    'registerOrder'?: () => void;
    'selectCurrency'?: (currency: string) => void;
    'url'?: string;
  }
  interface ModalBanner extends JSXBase.HTMLAttributes<HTMLModalBannerElement> {
    'active'?: boolean;
    'metaStyle'?: string;
  }
  interface ModalButton extends JSXBase.HTMLAttributes<HTMLModalButtonElement> {
    'action'?: () => void;
    'metaStyle'?: string;
  }
  interface PaidModal extends JSXBase.HTMLAttributes<HTMLPaidModalElement> {
    'apiKey'?: string;
    'onExit'?: (event: CustomEvent<any>) => void;
    'onNavigate'?: (event: CustomEvent<any>) => void;
    'orderData'?: Order;
    'paymentData'?: Payment;
    'referenceId'?: string;
    'statusMessage'?: string;
    'url'?: string;
  }
  interface PaymentPortal extends JSXBase.HTMLAttributes<HTMLPaymentPortalElement> {
    /**
    * API Key for merchant
    */
    'apiKey'?: string;
    /**
    * Close payment portal
    */
    'closeModal'?: () => void;
    /**
    * Order ID for previously setup order
    */
    'referenceId'?: string;
    /**
    * URL to lookup payment data
    */
    'url'?: string;
    /**
    * Total price in USD for order
    */
    'usd'?: number;
  }
  interface TokesModal extends JSXBase.HTMLAttributes<HTMLTokesModalElement> {
    'active'?: boolean;
    'metaStyle'?: string;
  }
  interface TokesPayments extends JSXBase.HTMLAttributes<HTMLTokesPaymentsElement> {
    /**
    * API Key for merchant
    */
    'apiKey'?: string;
    /**
    * Reference ID for order
    */
    'referenceId'?: string;
    /**
    * URL to lookup payment data
    */
    'url'?: string;
    /**
    * Total price in USD for order
    */
    'usd'?: number;
  }
  interface UnpaidModal extends JSXBase.HTMLAttributes<HTMLUnpaidModalElement> {
    'apiKey'?: string;
    'onExit'?: (event: CustomEvent<any>) => void;
    'onNavigate'?: (event: CustomEvent<any>) => void;
    'orderData'?: Order;
    'paymentData'?: Payment;
    'referenceId'?: string;
    'url'?: string;
  }

  interface IntrinsicElements {
    'currency-button': CurrencyButton;
    'currency-modal': CurrencyModal;
    'modal-banner': ModalBanner;
    'modal-button': ModalButton;
    'paid-modal': PaidModal;
    'payment-portal': PaymentPortal;
    'tokes-modal': TokesModal;
    'tokes-payments': TokesPayments;
    'unpaid-modal': UnpaidModal;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


