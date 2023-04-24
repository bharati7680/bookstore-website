import { Component } from '@angular/core';
import {BestsellersService} from '../../services/bestsellers.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
  
  //Data Display
  bookList: any = []
  totalBooks: number = 0
  constructor(private bookService: BestsellersService, private router: Router) { }

  ngOnInit(): void {
    //this.getMethod();

    this.bookService.booklist().subscribe((result) => {
      //console.log(result);
      if(!result.error){
        console.log(result.data.books)
        this.bookList = result.data.books
        this.totalBooks = result.data.totalBooks
      }
    })
  }
  clickBook(book:any) {
    console.log(book.isbn_13)
    this.router.navigateByUrl('book/' +book.isbn_13);
  }

  // public getMethod() {
  //   this.http.get("http://35.174.167.227:3000/api/book").subscribe();
  // }
}
