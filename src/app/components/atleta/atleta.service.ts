import { Atleta } from './atleta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  baseUrl = "http://localhost:3001/atletas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'] 
    })
  }

  create(atleta: Atleta): Observable<Atleta> {
    return this.http.post<Atleta>(this.baseUrl, atleta).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e) )
    );
  }

  
  read(): Observable<Atleta[]> {
    return this.http.get<Atleta[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e) )
    );
  }
  
  readById(id: number): Observable<Atleta> {
    const url = ` ${this.baseUrl}/${id}`
    return this.http.get<Atleta>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e) )
    );

  }
  
  update(atleta: Atleta): Observable<Atleta> {

    const url = ` ${this.baseUrl}/${atleta.id}`
    return this.http.put<Atleta>(url, atleta).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e) )
    );
    
  }

  delete(id: number): Observable<Atleta> {

    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Atleta>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e) )
    );
    
  }
  
  errorHandler(e: any): Observable<any>{
    console.log(e);
    this.showMessage('Puxa vida! Aconteceu um erro!', true);
    return EMPTY;
  
  }
  
}
