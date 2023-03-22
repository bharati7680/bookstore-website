import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CartService } from '../../service/cart.service';
import { OrderService} from '../../service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService, private orderService: OrderService) { }

  ngOnInit(): void { }

  createOrder() {
   let books = this.cartService.getBooks().map((book:any) => {
       return {
        bookId: book.id,
        quantity: book.quantity
       }
    })
    
    let data = {
      books,
      callbackUrl: environment.CALLBACK_URL
    }
    this.orderService.initOrder(data).subscribe((result:any) => {
      console.log(result)

      if(!result.error) {
        console.log(result.data.paymentLink)
        window.location.href = result.data.paymentLink
      }

    })
  }





}
