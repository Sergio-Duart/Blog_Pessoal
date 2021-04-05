import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tema } from 'src/app/model/tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-del',
  templateUrl: './tema-del.component.html',
  styleUrls: ['./tema-del.component.css']
})
export class TemaDelComponent implements OnInit {

  tem: tema = new tema()
  idTema: number

  constructor(
    private temaServ: TemaService,
    private rota: Router,
    private rotaAtiva: ActivatedRoute
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.rota.navigate(['/login'])
    }

    this.idTema = this.rotaAtiva.snapshot.params['id']
    this.findByIdTema(this.idTema)
  }

  findByIdTema(id: Number){
    this.temaServ.getByIdTema(id).subscribe((resp: tema)=>{
      this.tem = resp
    })
  }

  apagar(){
    this.temaServ.deleteTema(this.idTema).subscribe(()=>{
      alert('Tema apagado com sucesso !')
      this.rota.navigate(['/tema'])
    })
  }


}
