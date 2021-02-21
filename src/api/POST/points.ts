import {URL_API} from 'src/utils/constants';
import {FetchOptions} from 'src/interfaces/fetchOptions';

export const addPoints = (amount: number) => {
  const endpoint = `${URL_API}/user/points`;

  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.AUTH_TOKEN}`,
    },
    body: `{ \"amount\": ${amount}}`,
  };

  return fetch(endpoint, fetchOptions);
};
