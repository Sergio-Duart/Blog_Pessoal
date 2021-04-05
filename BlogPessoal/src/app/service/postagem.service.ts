import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { postag } from '../model/postag';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<postag[]>{
    return this.http.get<postag[]>('http://localhost:8080/Postagem', this.token)
  }

  getByIdPost(id: number): Observable<postag>{
    return this.http.get<postag>('http://localhost:8080/Postagem/${id}', this.token)
  }

  postPostagem(postagem: postag): Observable<postag>{
    return this.http.post<postag>('http://localhost:8080/Postagem', postagem, this.token)
  }

  putPostagem(postagem: postag): Observable<postag>{
    return this.http.put<postag>('http://localhost:8080/Postagem', postagem, this.token)
  }

  deletePost(id: number){
    return this.http.delete('http://localhost:8080/Postagem/${id}', this.token)
  }
}
