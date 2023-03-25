import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email: string = ""
  password: string = ""
  isLoading: boolean = false

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {


  }

  ngOnInit() {

  }

  login() {
    this.email = this.email.trim()
    this.password = this.password.trim()
    console.log(this.email, this.password)

    this.isLoading = true
    this.authService.login(this.email, this.password).subscribe((result:any) => {
      console.log()
      this.isLoading = false
      if(!result.error) {
        console.log(result.data.token)
        localStorage.setItem("token", result.data.token)
        this.router.navigateByUrl("/")
      } else {
        this.toastr.error(result.message)
      }


    })
  }

} 
