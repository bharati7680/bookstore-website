import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { BestsellersService } from 'src/app/service/bestsellers.service';
import { OrderService } from 'src/app/service/order.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {

  bookDetails:any = null
  constructor (private route: ActivatedRoute, //  URL
    private router: Router,
    private bookService: BestsellersService, 
    private authService: AuthService,
    private orderService: OrderService) {

  }

  ngOnInit(): void {
    console.log("IsUserLogin"+this.authService.isUserLogin())
    this.route.paramMap.subscribe((params:any) => {
      console.log(params.get('isbn13'))
      this.bookDetail(params.get('isbn13'))  
    });
  }

  bookDetail(isbn_13:any){
    this.bookService.bookDetail(isbn_13).subscribe((result)=>{
         console.log(result)

         if(!result.error){
          this.bookDetails= result.data.book
         }
    })
  }

  isUserLogin() {
    return this.authService.isUserLogin()
  }

  buyNow() {
    let data = {
      books: [{
          bookId: this.bookDetails.id, 
          quantity: 1
      }],
      callbackUrl: environment.CALLBACK_URL       //redirect to myorders page after payment is done
    }

    this.orderService.initOrder(data).subscribe((result:any) => {
      console.log(result)

      if(!result.error) {
        console.log(result.data.paymentLink)
        window.location.href = result.data.paymentLink
      }

    })
  
  }

  redirectToLogin() {
    this.router.navigate(['auth/login'])
  }



}


