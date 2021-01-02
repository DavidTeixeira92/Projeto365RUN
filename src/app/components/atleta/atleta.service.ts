import { Atleta } from './atleta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  baseUrl = "http://localhost:3001/atletas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(atleta: Atleta): Observable<Atleta> {
    return this.http.post<Atleta>(this.baseUrl, atleta)
  }

  read(): Observable<Atleta[]> {
    return this.http.get<Atleta[]>(this.baseUrl)
  }

  readById(id: number): Observable<Atleta> {
    const url = ` ${this.baseUrl}/${id}`
    return this.http.get<Atleta>(url)

  }

  update(atleta: Atleta): Observable<Atleta> {

    const url = ` ${this.baseUrl}/${atleta.id}`
    return this.http.put<Atleta>(url, atleta)

  }

  delete(id: number): Observable<Atleta> {

    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Atleta>(url);
    
  }

}
