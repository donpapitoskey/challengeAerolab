import {Product} from 'src/interfaces/product';
export interface User {
  _id: string;
  name: string;
  points: number;
  createDate: string;
  redeemHistory: Product[];
}
