import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth: boolean = false

  constructor() { }

  public getIsAuth(): boolean {
    return this.isAuth
  }

  public login(loginRequest: {email: string; password: string}): void {
    //logar o email e senha para o debug

    const{email, password} = loginRequest;
    console.log({
      email,
      password,

    }

    );
    this.isAuth = true
  }

  public logout(): void {
    this.isAuth = false;
    console.log('Usuário desconectado.')
  }

}