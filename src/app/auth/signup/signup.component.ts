import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userForm:FormGroup;
  isLoading: boolean = false

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private toastr:ToastrService) {
    this.userForm = this.fb.group({
      first_name:["",[Validators.required]],
      last_name:["",[Validators.required]],
      contact:["",[Validators.required]],
      email:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }

  ngOnInit() {

  }

  signup() {
    
    if(!this.userForm.valid) {
      this.userForm.markAllAsTouched()
      return
    }

    let user = this.userForm.value
    // console.log(this.email, this.password)
    this.isLoading = true

    this.authService.signup(
      user.first_name.trim(),
      user.last_name.trim(),
      user.contact.trim(),
      user.email.trim(),
      user.password.trim()
    ).subscribe((result:any) => {
      console.log(result)

      this.isLoading = false
      
      if(!result.error) {
        this.toastr.success(result.message)
        this.router.navigateByUrl("/auth/login")
      } else {
        this.toastr.error(result.message)

      }


    })
  }

} 

