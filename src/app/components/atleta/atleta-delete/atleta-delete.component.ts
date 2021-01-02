import { Atleta } from './../atleta.model';
import { AtletaService } from './../atleta.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atleta-delete',
  templateUrl: './atleta-delete.component.html',
  styleUrls: ['./atleta-delete.component.css']
})
export class AtletaDeleteComponent implements OnInit {
  
  atleta: Atleta;

  constructor( private atletaService: AtletaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.atletaService.readById(id).subscribe(atleta => {
      this.atleta = atleta
    });
  }


  deleteAtleta(): void{

    this.atletaService.delete(this.atleta.id).subscribe(() => {
      this.atletaService.showMessage('Atleta excluído com sucesso!')
      this.router.navigate(['/atletas']);
    });

  }

  cancel(): void {
    this.router.navigate(['/atletas']);
  }

}
