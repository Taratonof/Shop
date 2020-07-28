import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {ProductService} from '../services/product.service';
import {ProductsInterface} from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<ProductsInterface[]> {

  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ProductsInterface[]> {
    return this.productService.getAllProducts();
  }
}
