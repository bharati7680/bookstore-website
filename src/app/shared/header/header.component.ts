import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  constructor(private cartService:CartService, private router: Router) {}

  getTotalBooksInCart() {
     return this.cartService.getTotalBooks()
  }

  goToCart() {
    this.router.navigateByUrl('/cart')
  }

}
