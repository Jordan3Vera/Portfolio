import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean | UrlTree {
    return this.auth.isAuthenticated$.pipe(
      tap(loggedIn => {
        if(loggedIn){
          console.log("Acceso permitido");
        }
        else {
          console.log("Acceso no autorizado");
          this.router.navigate([''])
        }
      })
    );
  }
  
}
