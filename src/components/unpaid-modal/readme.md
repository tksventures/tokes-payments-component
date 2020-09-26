# unpaid-modal



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type      | Default     |
| ------------- | -------------- | ----------- | --------- | ----------- |
| `apiKey`      | `api-key`      |             | `string`  | `undefined` |
| `orderData`   | --             |             | `Order`   | `undefined` |
| `paymentData` | --             |             | `Payment` | `undefined` |
| `referenceId` | `reference-id` |             | `string`  | `undefined` |
| `url`         | `url`          |             | `string`  | `undefined` |


## Events

| Event      | Description | Type               |
| ---------- | ----------- | ------------------ |
| `exit`     |             | `CustomEvent<any>` |
| `navigate` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [payment-portal](../payment-portal)

### Depends on

- [tokes-modal](../tokes-modal)
- [modal-button](../tokes-modal/modal-button)
- context-consumer

### Graph
```mermaid
graph TD;
  unpaid-modal --> tokes-modal
  unpaid-modal --> modal-button
  unpaid-modal --> context-consumer
  tokes-modal --> modal-banner
  payment-portal --> unpaid-modal
  style unpaid-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
