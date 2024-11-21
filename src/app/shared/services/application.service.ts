import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //Torna o serviço disponiível em toda a aplicação como um Singleton
})
export class ApplicationService {

  private token: string | null = null //Armazena o token atual na memória

  constructor() {
    this.loadToken()
   }

   //Método para retornar o token atual armazenado
  public getToken(): string | null {
    return this.token//Retorna o token null se não tiver autenticado
  }

    //Método para definir um novo token
  public setToken(newToken: string): void {
    this.token = newToken//Atualiza o token na memória
    
    if(newToken) {
      localStorage.setItem('token', newToken)//salva o token no localStorage se for válido
    }
  }
      //Método privado para carregar o token do localStorage ao inicializar o serviço
  private loadToken(): void {
   const localToken = localStorage.getItem('token');//Tenta recuperar o token na memória e garante a persistência
   console.log('Try to get local stored token:', localToken)

   if(localToken) {
      this.setToken(localToken);//Se existir, atualiza o token na memória e garante a persistência
   }else{
    this.token = null;//Caso contrário define o token como null
   }
   }
  }

