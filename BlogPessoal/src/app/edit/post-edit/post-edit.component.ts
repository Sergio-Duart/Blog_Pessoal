import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { postag } from 'src/app/model/postag';
import { tema } from 'src/app/model/tema';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  post: postag = new postag()

  tem: tema = new tema()
  listaTemas: tema[]
  idTema: number

  constructor(
    private rota: Router,
    private rotaAtiva: ActivatedRoute,
    private postServ: PostagemService,
    private temaServ: TemaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == '') {
      this.rota.navigate(['/login'])
    }

    let id = this.rotaAtiva.snapshot.params['id']
    this.findByIdPost(id)
    this.findAllTemas()
  }

  findByIdPost(id: number){
    this.postServ.getByIdPost(id).subscribe((resp: postag)=>{
      this.post = resp
    })
  }

  findByIdTema(){
    this.temaServ.getByIdTema(this.idTema).subscribe((resp: tema)=>{
      this.tem = resp
    })
  }

  findAllTemas(){
    this.temaServ.getAllTema().subscribe((resp: tema[])=>{
      this.listaTemas = resp
    })
  }


  atualizar(){
    this.tem.id = this.idTema
    this.post.atriTema = this.tem

    this.postServ.putPostagem(this.post).subscribe((resp: postag)=>{
      this.post = resp
      alert('Postagem atualizada !')
      this.rota.navigate(['/home'])
    })
  }


}
