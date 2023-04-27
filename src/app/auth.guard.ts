import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
    let editBook=localStorage.getItem('editBook');
    let addBook=localStorage.getItem('addBook');
    let del=localStorage.getItem('delete');
    if(editBook == 'admin'){
      return true;
    }else if(addBook == 'admin'){
      return true;
    }else if(del=='admin'){
      return true;
    }else{
      return false;
    }

   
  }
  
}
