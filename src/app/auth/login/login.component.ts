import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
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
