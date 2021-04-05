import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { postag } from 'src/app/model/postag';
import { tema } from 'src/app/model/tema';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post-del',
  templateUrl: './post-del.component.html',
  styleUrls: ['./post-del.component.css']
})
export class PostDelComponent implements OnInit {

  post: postag = new postag()

  idPost: number

  constructor(
    private rota: Router,
    private rotaAtiva: ActivatedRoute,
    private postServ: PostagemService,
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == '') {
      this.rota.navigate(['/login'])
    }

    this.idPost = this.rotaAtiva.snapshot.params['id']
    this.findByIdPost(this.idPost)
  }

  findByIdPost(id: number){
    this.postServ.getByIdPost(id).subscribe((resp: postag)=>{
      this.post = resp
    })
  }

  apagar(){
    this.postServ.deletePost(this.idPost).subscribe(()=>{
      alert('Postagem apagada !')
      this.rota.navigate(['/home'])
    })
  }


}
