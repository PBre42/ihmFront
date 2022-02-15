import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseURL='../../assets/orders.json';
  private readonly orders$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);
  
  constructor(private http: HttpClient) { }
  fetchList() {
    this.http.get<Order[]>(this.baseURL)
      .subscribe(data => this.orders$.next(data));
  }
  get orders(): Observable<Order[]> {
    return this.orders$.asObservable();
  }
}


