import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL='../../assets/products.json';
  private readonly products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  
  constructor(private http: HttpClient) { }
  fetchList() {
    this.http.get<Product[]>(this.baseURL)
      .subscribe(data => this.products$.next(data));
  }
  get products(): Observable<Product[]> {
    return this.products$.asObservable();
  }
}
