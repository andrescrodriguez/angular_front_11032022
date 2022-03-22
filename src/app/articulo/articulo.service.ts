import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Articulo } from '../articulos/articulos';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private apiURL = environment.apiURL + "/articulofront";

  constructor(private http: HttpClient) { }

  public getByCategoriaArticulo_nombreDeRuta(categoriaNombreDeRuta: string, articuloNombreDeRuta: string) : Observable<Articulo> {
    return this.http.get<Articulo>(this.apiURL + '/getByNombreDeRuta/' + categoriaNombreDeRuta + '/' + articuloNombreDeRuta);
  }
}
