import { Injectable } from '@angular/core'; // Faz com que a classe possa ser injetada em outras partes do app.
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs'; // Utilitários RxJS para lidar com fluxos assíncronos e erros
import { Router } from '@angular/router';
import { ApplicationService } from './application.service';

@Injectable({
  providedIn: 'root' //torna  o interceptdador disnponível globalmente no app
})
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,//Para redirecionar o usuário em caso de erro de autenticação
    private applicationService: ApplicationService,//para obter o token salvo no serviço
  ) {}

  //Método que intercepta as requisições Http
  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('intercept', { request }) //Log da requisição interceptada
    
    const token = this.applicationService.getToken(); //Recupera o Token armazenado

    const headers = token
      ? request.headers.set('Authorization', `Bearer ${token}`)
      : request.headers

    const authReq = request.clone({ headers }) //Clona a requisição com o cabeçalho modificado

    //Passa a requisição pro próximo manipulador e trata erros, se ocorrerem
    return next.handle(authReq)
      .pipe(catchError(x => this.handleAuthError(x)));
  }

  //Método que lida com os erros de autenticação(401 ou 403)
  private handleAuthError(err: HttpErrorResponse): Observable<never> {
    if (err.status === 401 || err.status === 403) {
      this.router.navigateByUrl(`/entrar`); //Redireciona o usuário para a página de login
    }

    return throwError(() => new Error(err.message)); //Prepara o erro pra quem chamou
  }

}
