import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsInterface} from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Promise<ProductsInterface[]> {
    return this.http.get<ProductsInterface[]>('http://ssdev.superagent.ru/TestApp/Values/GetWithParent').toPromise();
  }
}

