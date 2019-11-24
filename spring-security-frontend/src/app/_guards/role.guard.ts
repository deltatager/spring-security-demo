import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {IdentityService} from "../_services/identity.service";

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  currentRoles: Array<string>;

  constructor(private idSvc: IdentityService) {
    idSvc.getRoles()
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }

}
