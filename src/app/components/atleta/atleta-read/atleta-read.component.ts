import { AtletaService } from './../atleta.service';
import { Atleta } from './../atleta.model';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-atleta-read',
  templateUrl: './atleta-read.component.html',
  styleUrls: ['./atleta-read.component.css']
})
export class AtletaReadComponent implements OnInit {

  public atletas: Atleta[]
  public displayedColumns = []
  public innerWidth: any;

  constructor(private atletaService: AtletaService) {}

  ngOnInit(): void {
    this.atletaService.read().subscribe(atletas => {
      this.atletas = atletas
      console.log(atletas)
    })
    this.innerWidth = window.innerWidth

    if (this.innerWidth <=760) {
      this.displayedColumns = ['name', 'objetivo', 'action'];
    } else {
      this.displayedColumns = ['id', 'name', 'idade', 'peso','objetivo', 'email', 'action']
    }
  }

  @HostListener('window:resize', ['$event'])
  onresize(event) {
  this.innerWidth = window.innerWidth;
  if (this.innerWidth <=760) {
      this.displayedColumns = ['name', 'objetivo', 'action'];
    } else {
      this.displayedColumns = ['id', 'name', 'idade', 'peso','objetivo', 'email', 'action']
    }
  }
}
