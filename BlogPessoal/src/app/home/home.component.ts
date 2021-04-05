import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { postag } from '../model/postag';
import { tema } from '../model/tema';
import { usuario } from '../model/usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post: postag = new postag()
  listaPost: postag[]

  tem: tema = new tema()
  listaTemas: tema[]
  idTema: number

  user: usuario = new usuario()
  idUser = environment.id 

  constructor(
    private rota: Router,
    private postServ: PostagemService,
    private temaServ: TemaService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    if(environment.token == '') {
      // alert('Sua sessão expirou, faça o login novamente.')
      this.rota.navigate(['/login'])
    }

    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas(){
    this.temaServ.getAllTema().subscribe((resp: tema[])=>{
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temaServ.getByIdTema(this.idTema).subscribe((resp: tema)=>{
      this.tem = resp
    })
  }

  getAllPostagens(){
    this.postServ.getAllPostagens().subscribe((resp: postag[])=>{
      this.listaPost = resp
    })
  }

  findByIdUser(){
    this.auth.getByIdUser(this.idUser).subscribe((resp: usuario)=>{
      this.user = resp
    })
  }

  publicar(){
    this.tem.id = this.idTema
    this.post.atriTema = this.tem

    this.user.id = this.idUser
    this.post.atriUsuario = this.user

    this.postServ.postPostagem(this.post).subscribe((resp: postag)=>{
      this.post = resp
      alert('Postagem realizada com sucesso !')
      this.post = new postag()
      this.getAllPostagens()
    })
  }

}
