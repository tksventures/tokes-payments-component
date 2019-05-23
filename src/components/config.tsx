import { createProviderConsumer } from '@stencil/state-tunnel';
import { Order, Payment } from '../types';

export interface State {
  url: string,
  apiKey: string,
  referenceId: string,
  orderData?: Order,
  paymentData?: Payment,
}

export default createProviderConsumer<State>({
  url: null,
  apiKey: null,
  referenceId: null,
  orderData: null,

},
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
);
