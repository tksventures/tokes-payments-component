# payment-portal



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                         | Type         | Default     |
| ------------- | -------------- | ----------------------------------- | ------------ | ----------- |
| `apiKey`      | `api-key`      | API Key for merchant                | `string`     | `undefined` |
| `closeModal`  | --             | Close payment portal                | `() => void` | `undefined` |
| `referenceId` | `reference-id` | Order ID for previously setup order | `string`     | `undefined` |
| `url`         | `url`          | URL to lookup payment data          | `string`     | `undefined` |
| `usd`         | `usd`          | Total price in USD for order        | `number`     | `undefined` |


## Dependencies

### Used by

 - [tokes-payments](../tokes-payments)

### Depends on

- [currency-modal](../currency-modal)
- [unpaid-modal](../unpaid-modal)
- [paid-modal](../paid-modal)
- context-consumer

### Graph
```mermaid
graph TD;
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
  tokes-payments --> payment-portal
  style payment-portal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
