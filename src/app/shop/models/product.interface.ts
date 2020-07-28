import {GroupInterface} from './group.interface';

export interface ProductInterface {
  id: number;
  name: string;
  price: number;
  checked: boolean;
  group: GroupInterface;
}
