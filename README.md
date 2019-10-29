# Tokes Payments Component
A Web Component with functionality to accept payments with reference to your orders.

### Prerequisites
You will need access to a Tokes Payments API server and at least one valid API key and Webhook URL registered on this server. Register at https://gateway.tokesplatform.org.

## Installation
There are multiple ways to add this component to your app:

### Framework Integrations
To use this component in your React, Angular, Vue, or Ember based app, [Follow These Instructions](https://stenciljs.com/docs/overview)

`Tokes Payments Component` only relies on primitive data to be supplied to it, so these custom elements will work within your HTML.

### Script tag
- Put a script tag similar to this `<script src='https://unpkg.com/tokes-payments-component@0.1.0/dist/tokes-payments-component.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc.

### Node Modules
- Run `npm install tokes-payments-component --save`
- Put a script tag similar to this `<script src='node_modules/my-name/dist/tokes-payments-component.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc.

### In a stencil-app-starter app
- Run `npm install tokes-payments-component --save`
- Add an import to the npm packages: `import tokes-payments`;
- Then you can use the element anywhere in your template, JSX, html etc.

## Configuration
```html
<tokes-payments 
  url="TOKES_PAYMENTS_SERVER" 
  api-key="PUBLIC_API_KEY" 
  reference-id="YOUR_ORDER_ID" 
  usd="USD_AMOUNT_DUE" />
```

All props are required:

| Prop | Description |
| --- | --- |
| `url` | URL where a Tokes Payments API server is running |
| `api-key` | Your *Public* API Key registered on the server  |
| `reference-id` | A reference to the Order this payment is for. If there is none, insert a unique random string to refer to in a webhook verification |
| `usd` | The amount in USD that you want the payment request to load with |

### Contributing
`Tokes Payments Component` was built using [Stencil](https://stenciljs.com/) tools, please read through their [docs](https://stenciljs.com/docs/introduction) to learn more.

When developing extensions to the package, run the following command locally.
```
npm test
```

## Usage
- Ensure you have a [properly configured](#configuration) component and up-to-date merchant account.
- When users of your app make a payment, your webhook URL will receive data regarding the current status.  This allows your app to verify the payment was received to your account.

### Example
```html
<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
  <script src='https://unpkg.com/tokes-payments-component@0.1.0/dist/tokes-payments-component.js'></script>
</head>
<body>
  <tokes-payments 
    url="TOKES_PAYMENTS_SERVER" 
    api-key="PUBLIC_API_KEY" 
    reference-id="YOUR_ORDER_ID" 
    usd="USD_AMOUNT_DUE" />
</body>
</html>
```
### Payment Verification

If you need to verify the payments received, there are a few ways to do this:
- Manually confirm the payment is received to your receiving address.
- Query the payment's designated Blockchain Address to see if the funds were sent (Refer to docs to see how this is done via the protocol for the currency you are receiving, i.e. [Waves Address Transaction Query](https://docs.wavesplatform.com/en/waves-api-and-sdk/waves-node-rest-api/transactions.html#section-5040393571675bece5c1e06579164f3d))
- _(Recommended)_ Utilize the `tokes-payments-client` module to query the payment status directly.
#### Example Server-Side Verification
```js
import TokesPaymentsClient from 'tokes-payments-client';

const { PAYMENT_SERVER, API_KEY } = process.env;
const tokesClient = TokesPaymentsClient({
    host: PAYMENT_SERVER,
    apiKey: API_KEY,
});

export function registerRoutes (app) {
  /**
  * Setup a route to receive webhooks from payment activity
  * The body of the request will contain the latest payment data
  */
  app.post('/tokes/payments', async (req) => {
    const paymentData = req.body;
    if (!paymentData.id) return res.status(500).send();

    const payment = await tokesClient.paymentStatus(paymentData.id);
    /**
    * Verify the payment for the order sent here is settled on the Payments Server
    */
    if (payment.settled && payment.reference_id === paymentData.reference_id) {
      /**
       * Lookup the order in your system by the reference ID attached to the payment 
       */
      const myOrder = await getOrder(paymentData.reference_id);
      await myOrder.fulfilled();
      return res.send('Order fulfilled');
    }
  }
}
```
