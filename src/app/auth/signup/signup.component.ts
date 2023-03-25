import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  firstName: string = ""
  lastName: string = ""
  contact: string = ""
  email: string = ""
  password: string = ""

  constructor(private authService: AuthService, private router: Router) {


  }

  ngOnInit() {

  }

  login() {
    console.log(this.email, this.password)
    this.authService.login(this.email, this.password).subscribe((result:any) => {
      console.log(result)

      if(!result.error) {
        console.log(result.data.token)
        localStorage.setItem("token", result.data.token)
        this.router.navigateByUrl("/login")
      }

    })
  }

} 

