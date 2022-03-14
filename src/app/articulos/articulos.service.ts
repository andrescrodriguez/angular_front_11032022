import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Articulo } from './articulos';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + "/articulofront";

  public getAll(pagina: number, cantidadDeRegistrosAMostrar: number) {
    var params = new HttpParams();
    params = params.append('Pagina', pagina.toString());
    params = params.append('RegistrosPorPagina', cantidadDeRegistrosAMostrar.toString());
    return this.http.get<Articulo[]>(this.apiURL + '/getAll', {observe: 'response', params}); 
  }

  public getById(id: number) : Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.apiURL + '/getById/' + id);
  }

}
