import { Atleta } from './../atleta.model';
import { AtletaService } from '../atleta.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atleta-create',
  templateUrl: './atleta-create.component.html',
  styleUrls: ['./atleta-create.component.css']
})
export class AtletaCreateComponent implements OnInit {
  // Teste no binding de Atributo
  // propLegal = "qualquer"

  atleta: Atleta = {
    name: '',
    idade: null,
    email: ''
  }


  constructor(private atletaService: AtletaService,
              private router: Router) { }

  ngOnInit(): void {


  }

  createAtleta(): void {
    this.atletaService.create(this.atleta).subscribe(() => {
      this.atletaService.showMessage('Cadastrado de atleta realizado!')
      this.router.navigate(['/atletas'])
    })


  }

  cancel(): void {
    this.router.navigate(['/atletas'])
  }

  // Teste no binding de Evento
  // fazerAlgo(): void {
  //   console.log('Codando e Relaxando. Delícia, cara!!')
  // }

}
