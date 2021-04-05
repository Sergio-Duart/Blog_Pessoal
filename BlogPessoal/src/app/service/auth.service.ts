import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { userlogin } from '../model/userlogin';
import { usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
    

  entrar(login: userlogin): Observable<userlogin>{
    return this.http.post<userlogin>('http://localhost:8080/Usuario/logar', login)
  }

  cadastrar(user: usuario): Observable<usuario>{
    return this.http.post<usuario>('http://localhost:8080/Usuario/cadastrar', user)
  }

  getByIdUser(id: number): Observable<usuario>{
    return this.http.get<usuario>(`http://localhost:8080/Usuario/${id}`)
  }

  logado(){
    let ok: boolean = false

    if (environment.token != ''){
      ok = true
    }

    return ok
  }
}
