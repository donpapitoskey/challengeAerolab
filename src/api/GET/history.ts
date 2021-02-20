import { URL_API } from 'src/utils/constants';
import { FetchOptions } from 'src/interfaces/fetchOptions';

export const getProducts = () => {
  const endpoint = `${URL_API}/user/history`;

  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`
    }
  };

  return fetch(endpoint, fetchOptions);
};
