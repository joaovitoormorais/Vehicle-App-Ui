import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/login-request';
import { ApplicationService } from './application.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth: boolean = false;

  constructor(private router: Router, private applicationService: ApplicationService,
    private httpService: ApplicationService
  ) { }

  public getIsAuth(): boolean {
    return this.isAuth;
  }

  
  public login({ email, password }: LoginRequest): void {
    // Printar para a gente ver no log
    console.log({
      email,
      password
    })

    let backendReturn: boolean = false

    // Chamar backend
    if (email === "xpto@a.com") {
      backendReturn = true
    }


    // autenticar na nossa aplicacao
    this.isAuth = backendReturn

    // redirecionar para dashboard
    if (this.isAuth) {
      this.router.navigate(['/dashboard'])
    } else {
      alert('Opa algo errado!')
    }
}

}