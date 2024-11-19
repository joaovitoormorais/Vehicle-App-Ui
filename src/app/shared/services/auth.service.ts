import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth: boolean = false;
  

  constructor() { }


  public getIsAuth():boolean {
    return this.isAuth;
  }

  public login({ email, password }: { email: string; password: string }): void {
    // Printar no log para depuração
    console.log({
      email,
      password
    });
  }

  public logout(): void {
    this.isAuth = false; // Exemplo de implementação para logout
    console.log('Usuário deslogado');

}

}