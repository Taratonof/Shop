import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopViewComponent } from './view/shop-view.component';
import {RouterModule, Routes} from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import {ProductsResolver} from './resolvers/products.resolver';

const ROUTES: Routes = [
  {
    path: '',
    component: ShopViewComponent,
    resolve: {
      products: ProductsResolver
    }
  }
];

@NgModule({
  declarations: [ShopViewComponent, ProductListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ShopModule { }
