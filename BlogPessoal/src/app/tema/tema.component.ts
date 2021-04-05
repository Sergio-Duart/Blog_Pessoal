import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { tema } from '../model/tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: tema = new tema()
  listaTemas: tema[]

  constructor(
    private rota: Router,
    private temaServ: TemaService
  ) { }

  ngOnInit() {
    if(environment.token == '') {
      // alert('Sua sessão expirou, faça o login novamente.')
      this.rota.navigate(['/login'])
    }

    this.findAllTemas()
  }
  
  findAllTemas(){
    this.temaServ.getAllTema().subscribe((resp: tema[]) =>{
      this.listaTemas = resp
    })
  }

  cadastrar(){
    this.temaServ.postTema(this.tema).subscribe((resp: tema) => {
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new tema()
    })
  }

}
