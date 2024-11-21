import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type RequestOptions = { headers: HttpHeaders, observe: 'response' }

//Define o serviço como injetável em toda aplicação
@Injectable({
  providedIn: 'root'
})
export class ApplicationHttpService {

  public static readonly MEDIA_TYPE_APP_JSON = 'application/json';

  //Url base para requisições. Pode ser configurada conforme necessário
  private BASE_URL: string = '/api'

  //Injeta o HttpClient, que é responsável pelas requisições Http
  constructor(
    private httpClient: HttpClient,
  ) { }

  public get<T>(url: string, mediaType?: string): Observable<HttpResponse<T>> {
    return this.httpClient.get<T>(
      this.BASE_URL + url,
      this.generateHttpOptions(this.getMediaType(mediaType))
    );
  }

  post<T>(url: string, body: any, mediaType?: string): Observable<HttpResponse<T>> {
    return this.httpClient.post<T>(
      this.BASE_URL + url,
      body, //Corpo da requisição, enviada ao POST
      this.generateHttpOptions(this.getMediaType(mediaType))
    );
  }

  put<T>(url: string, body: any, mediaType?: string): Observable<HttpResponse<T>> {
    return this.httpClient.put<T>(
      this.BASE_URL + url,
      body, // Método para relizar requisições de atualização
      this.generateHttpOptions(this.getMediaType(mediaType))
    );
  }

  delete<T>(url: string, mediaType?: string): Observable<HttpResponse<T>> {
    return this.httpClient.delete<T>(
      this.BASE_URL + url, // Método para realizar requisições Http DELETE
      this.generateHttpOptions(this.getMediaType(mediaType))
    );
  }

  private generateHttpOptions(mediaType: string): RequestOptions {
    return {
      headers: new HttpHeaders()
        .set('Accept', mediaType), //Adiciona o cabeçalho Accept
      observe: 'response'//Retorna a resposta completa(não apenas o corpo)
    };
  }

  private getMediaType(mediaType: string | undefined): string {
    return mediaType
      ? mediaType //Retorna o tipo de mídia fornecido
      : ApplicationHttpService.MEDIA_TYPE_APP_JSON // Retorna o padrão se não fornecido
  }
}

