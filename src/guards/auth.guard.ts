import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { DataService } from '../app/service/data.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private dataservice: DataService
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("In AuthGuard " + this.dataservice.surveyId);
    
    if (sessionStorage.getItem("ssn_surveyId") == undefined) {
      this.router.navigate(['/home']);
    }

    return true;
  }
}
