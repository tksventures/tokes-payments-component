# tokes-payments



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                  | Type      | Default             |
| --------------- | ---------------- | ---------------------------- | --------- | ------------------- |
| `apiKey`        | `api-key`        | API Key for merchant         | `string`  | `undefined`         |
| `buttonContent` | `button-content` | Button Inner HTML            | `string`  | `'Pay with Crypto'` |
| `disabled`      | `disabled`       | Button disabled parameter    | `boolean` | `false`             |
| `referenceId`   | `reference-id`   | Reference ID for order       | `string`  | `undefined`         |
| `url`           | `url`            | URL to lookup payment data   | `string`  | `undefined`         |
| `usd`           | `usd`            | Total price in USD for order | `number`  | `undefined`         |


## Dependencies

### Depends on

- [payment-portal](../payment-portal)

### Graph
```mermaid
graph TD;
  tokes-payments --> payment-portal
  payment-portal --> currency-modal
  payment-portal --> unpaid-modal
  payment-portal --> paid-modal
  payment-portal --> context-consumer
  currency-modal --> tokes-modal
  currency-modal --> currency-button
  currency-modal --> modal-button
  currency-modal --> context-consumer
  tokes-modal --> modal-banner
  unpaid-modal --> tokes-modal
  unpaid-modal --> modal-button
  unpaid-modal --> context-consumer
  paid-modal --> tokes-modal
  paid-modal --> modal-button
  paid-modal --> context-consumer
  style tokes-payments fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
