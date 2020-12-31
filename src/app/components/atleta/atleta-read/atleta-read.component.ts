import { AtletaService } from './../atleta.service';
import { Atleta } from './../atleta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atleta-read',
  templateUrl: './atleta-read.component.html',
  styleUrls: ['./atleta-read.component.css']
})
export class AtletaReadComponent implements OnInit {

  atletas: Atleta[]

  constructor(private atletaService: AtletaService) { }

  ngOnInit(): void {

    this.atletaService.read().subscribe(atletas => {
      this.atletas = atletas
      console.log(atletas)
    })
  
  }

}
