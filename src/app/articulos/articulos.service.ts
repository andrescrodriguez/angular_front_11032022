import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { articulosDTO } from './articulos';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL;

  public getAll() : Observable<articulosDTO[]> {
    return this.http.get<articulosDTO[]>(this.apiURL + '/articulo');
  }

}
