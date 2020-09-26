# tokes-modal



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type      | Default     |
| ----------- | ------------ | ----------- | --------- | ----------- |
| `active`    | `active`     |             | `boolean` | `undefined` |
| `metaStyle` | `meta-style` |             | `string`  | `undefined` |


## Dependencies

### Used by

 - [currency-modal](../currency-modal)
 - [paid-modal](../paid-modal)
 - [unpaid-modal](../unpaid-modal)

### Depends on

- [modal-banner](modal-banner)

### Graph
```mermaid
graph TD;
  tokes-modal --> modal-banner
  currency-modal --> tokes-modal
  paid-modal --> tokes-modal
  unpaid-modal --> tokes-modal
  style tokes-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
