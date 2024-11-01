import { inject } from '@angular/core';
import { CanActivateFn, Router} from '@angular/router';

export const permissionGuard: CanActivateFn = (route, state) => {


  const router: Router = inject(Router)

  const hasPermission = false //false

  console.log("Entrou no guard do permissionamento")

  if(hasPermission) {
    console.log("Permissão concedida")
    return true
  }

  console.error("Permissão negada")

  router.createUrlTree(['/entrar'])
  return false 
};