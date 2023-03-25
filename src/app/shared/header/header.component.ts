import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  constructor(private cartService:CartService, private authService: AuthService, private router: Router) {}

  getTotalBooksInCart() {
     return this.cartService.getTotalBooks()
  }

  goToCart() {
    this.router.navigateByUrl('/cart')
  }

  login() {
    // this.authService.login
    this.router.navigateByUrl('/login')
  }

}
