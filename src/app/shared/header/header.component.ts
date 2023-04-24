import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

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
    this.router.navigateByUrl('/auth/login')
  }

  signup() {
    this.router.navigate(['/auth/signup'])
  }

  isUserLogin() {
    return this.authService.isUserLogin()
  }

  logOut() {
    this.authService.logOut()
    window.location.reload()

  }

}
