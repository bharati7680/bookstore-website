import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  orders:any = []
  constructor(private orderService: OrderService) {

  }

  ngOnInit(){

    this.getOrders()
  }

  getOrders() {
    this.orderService.getOrders().subscribe((result:any) => {
      console.log()

      if(!result.error) {
        console.log(result.data)
        this.orders = result.data.orders;
      }
  
      
    })
  }

}
