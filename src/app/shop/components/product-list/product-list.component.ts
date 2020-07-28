import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ProductInterface} from '../../models/product.interface';
import {ActivatedRoute} from '@angular/router';
import {GroupInterface} from '../../models/group.interface';
import {uniqBy as l_uniqBy} from 'lodash';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  allProducts: ProductInterface[];
  productList: ProductInterface[] = [];
  uniqGroups: GroupInterface[];
  sortState = {
    byAlphabet: 0,
    byPrice: 0
  };

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const allProducts = data.products
        .map(groupElem => groupElem.skus.map(product => ({...product, checked: false, group: groupElem.group})));
      this.allProducts = [].concat(...allProducts);
      this.productList = this.allProducts;
      const groups = this.allProducts.map(product => ({id: product.group.id, name: product.group.name}));
      this.uniqGroups = l_uniqBy(groups, 'id');
    });
  }

  selectProduct(id: number): void {
    this.productList.forEach(product => product.checked = (product.id === id) ? !product.checked : product.checked);
  }


  addToCart(): void {
    this.allProducts = this.allProducts.filter(product => !product.checked);
    this.productList = this.productList.filter(product => !product.checked);
  }

  sortProductsByAlph(): void {
    if (this.sortState.byAlphabet === 0 || this.sortState.byAlphabet === -1) {
      this.sortState.byAlphabet = 1;
      this.productList.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.sortState.byAlphabet = -1;
      this.productList.sort((a, b) => b.name.localeCompare(a.name));
    }
  }


  sortProductsByPrice(): void {
    if (this.sortState.byPrice === 0 || this.sortState.byPrice === -1) {
      this.sortState.byPrice = 1;
      this.productList.sort((a, b) => a.price - b.price);
    } else {
      this.sortState.byPrice = -1;
      this.productList.sort((a, b) => b.price - a.price);
    }
  }

  selectGroup(id: number): void {
    if (id === -1) {
      this.productList = this.allProducts;
      return;
    }
    this.productList = this.allProducts.filter(product => product.group.id === id);
  }

  upperCaseFirstSymbol(str): string {
    if (!str) {
      return str;
    }

    return str[0].toUpperCase() + str.toLowerCase().slice(1);
  }
}

