import {ProductInterface} from './product.interface';
import {GroupInterface} from './group.interface';

export interface ProductsInterface {
  group: GroupInterface;
  skus: {
    id: number;
    name: string;
    price: number;
  }[];
}
