import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-atleta-crud',
  templateUrl: './atleta-crud.component.html',
  styleUrls: ['./atleta-crud.component.css']
})
export class AtletaCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAtletaCreate(): void{
    this.router.navigate(['/atletas/create'])
  }
}
