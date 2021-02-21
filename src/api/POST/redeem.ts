import {URL_API} from 'src/utils/constants';
import {FetchOptions} from 'src/interfaces/fetchOptions';

export const redeemPoints = (itemId: string) => {
  const endpoint = `${URL_API}/redeem`;

  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.AUTH_TOKEN}`,
    },
    body: `{ \"productId\": \"${itemId}\"}`,
  };

  return fetch(endpoint, fetchOptions);
};
