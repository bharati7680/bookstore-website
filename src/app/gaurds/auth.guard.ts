import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.authService.isUserLogin()) {

          if(route.url.length > 0 && route.url[0].path === "auth") {
            this.router.navigate(['/'])
          } 
          // console.log(route.url[0].path,"hello")
          return true;
      } else if(route.url.length > 0 && route.url[0].path === "auth") {
        return true;
      }

      this.router.navigateByUrl("/auth/login")

    console.log(route.url, "hi")
      return false;
  }
  


}
