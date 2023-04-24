import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AuthService } from '../services/auth.service';


@NgModule({
  declarations: [
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class BookModule { }
