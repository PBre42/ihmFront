import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { updateFor } from 'typescript';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {  
  orders : Observable<Order[]> | undefined;
  constructor(private readonly orderService: OrderService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  private getUserList(){
    this.orders = this.orderService.orders;
    this.orderService.fetchList();
  }

  public detailsOrder(o:Order){
    if(o.selected)o.selected=false;
    else o.selected=true;
  }
}
