import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../SERVICIOS/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authSErvice:AuthService,private router:Router){}
  canActivate():boolean{
      if(!this._authSErvice.isAuth()){
        console.log('el token no es valido o expiro');
        this.router.navigate(['login'])
        return false
      }
      
    return true;
  }
  
}
