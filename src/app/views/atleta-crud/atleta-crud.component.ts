import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-atleta-crud',
  templateUrl: './atleta-crud.component.html',
  styleUrls: ['./atleta-crud.component.css']
})
export class AtletaCrudComponent implements OnInit {

  constructor(private router: Router,
    private headerService: HeaderService) { 

      headerService.headerData = {
        title: 'Cadastro de Atletas',
        icon: 'person_pin',
        routeUrl: '/atletas'
      }

    }

  ngOnInit(): void {
  }

  navigateToAtletaCreate(): void{
    this.router.navigate(['/atletas/create'])
  }
}
