import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CartService } from '../../service/cart.service';
import { OrderService} from '../../service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  isLoading = false;

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

    this.isLoading = true;

    this.orderService.initOrder(data).subscribe((result:any) => {
      console.log(result)
    this.isLoading = false;
      if(!result.error) {
        console.log(result.data.paymentLink)
        window.location.href = result.data.paymentLink
      }

    })

  }

  getBooks() {
     return this.cartService.getBooks()
    
  }

  addBook(book:any) {
    this.cartService.addBook(book)
  }

  removeBook(book:any) {
    this.cartService.removeBook(book.id)
  }

  getTotalPrice() {
    let totalPrice = 0

    this.cartService.getBooks().forEach((book:any) => {
       totalPrice += book.price * book.quantity
    })
    return totalPrice 
  }




}
