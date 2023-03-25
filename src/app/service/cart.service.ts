import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private books:any = []
  constructor() { }


  addBook(book:any) {
    const existingBook = this.books.find((b:any) => b.id === book.id)

    if(existingBook) {
      existingBook.quantity += 1
    }else{
      this.books.push({
        ...book, 
        quantity: 1
      })
    }
    console.log(this.books)
  }

  removeBook(bookId:any) {
    const existingBook = this.books.find((b:any) => b.id === bookId)

    if(!existingBook) return 
    // existing book ka quantity > 1
    if(existingBook.quantity > 1) {
      existingBook.quantity -= 1
    }else{
      this.books = this.books.filter((b:any) => b.id !== bookId)

    }    
  }

  getBookQunatity(bookId:any) {
    const existingBook = this.books.find((b:any) => b.id === bookId)
    return existingBook ? existingBook.quantity : 0
  }

  getTotalBooks() {
    return  this.books.length
  }

  getBooks() {
    return this.books
  }

  

}
