import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tema } from 'src/app/model/tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tem: tema = new tema()

  constructor(
    private temaServ: TemaService,
    private rota: Router,
    private rotaAtual: ActivatedRoute
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.rota.navigate(['/login'])
    }
    let id = this.rotaAtual.snapshot.params['id']
    this.findByIdTema(id)
  }

  findByIdTema(id: number){
    this.temaServ.getByIdTema(id).subscribe((resp: tema) =>{
      this.tem = resp
    })
  }

  atualizar(){
    this.temaServ.putTema(this.tem).subscribe((resp: tema)=>{
      this.tem = resp
      alert('Tema atualizado com sucesso !')
      this.rota.navigate(['/tema'])
    })
  }

}
