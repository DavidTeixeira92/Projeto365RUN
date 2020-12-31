import { Atleta } from './../atleta.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AtletaRead2DataSource } from './atleta-read2-datasource';

@Component({
  selector: 'app-atleta-read2',
  templateUrl: './atleta-read2.component.html',
  styleUrls: ['./atleta-read2.component.css']
})
export class AtletaRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Atleta>;
  dataSource: AtletaRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'idade', 'email'];

  ngOnInit() {
    this.dataSource = new AtletaRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
