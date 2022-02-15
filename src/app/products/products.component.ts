import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductService } from './../services/product.service' 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Observable<Product[]> | undefined;
  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  private getProductList(){
    this.products = this.productService.products;
    this.productService.fetchList();
  }

  public detailsProduct(p:Product){
    if(p.selected)p.selected = false;
    else p.selected = true;
  }

}
