import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/auth';
import { map } from 'rxjs/operators';


import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UsuarioLogeadoGuard implements CanActivate {
  
  constructor(private Afauth: AngularFireAuth, public router: Router){}


  canActivate(

    next: ActivatedRouteSnapshot,
    
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      console.log("entro");
       return this.Afauth.authState.pipe(map(
        auth=> {
          const c=auth;
          console.log(c?.uid)
            if(c?.uid!=undefined || c?.uid!=undefined==null )
            {
              this.router.navigate(['/admin']);
              console.log("SI")
              return false
            }else
            {
              console.log("Si logiuin")
              return true
            }
      }
   ))
  }
  
}