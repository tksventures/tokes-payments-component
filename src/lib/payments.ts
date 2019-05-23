import { Order } from '../types';

function get(url: string = '', accesskey: string = '') {
  return fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
          'accesskey': accesskey,
          'Content-Type': 'application/json',
      },
  });
}

function post(url: string = '', accesskey: string = '', data: any = {}) {
  return fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
          'accesskey': accesskey,
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });
}

export async function orderStatus(url: string, apiKey: string, referenceId: string) {
  try {
    const response = await get(`${url}/api/merchant/refs/${referenceId}`, apiKey);
    return response.json();
  } catch (er) {
    throw new Error(er);
  }
} 

export async function paymentRequest(url: string, apiKey: string, orderData: Order) {
  try {
    const response = await post(`${url}/api/merchant/payments`, apiKey, orderData);
    return response.json();
  } catch (er) {
    throw new Error(er);
  }
} 