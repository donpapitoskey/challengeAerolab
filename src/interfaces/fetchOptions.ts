export interface FetchOptions {
  method: 'GET' | 'POST';
  headers: {
    'Content-Type': string;
    Accept: string;
    Authorization: string;
  };
  body?: string;
}
