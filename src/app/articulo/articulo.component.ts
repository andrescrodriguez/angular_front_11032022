import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from './articulo.service';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articuloTitulo: string;
  articuloPreLectura: string;
  articuloContenido: string;
  categoriaNombre: string;

  constructor(private activatedRoute: ActivatedRoute,
    private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      this.articuloService.getByCategoriaArticulo_nombreDeRuta(params.categoria, params.titulo).subscribe(result => {
        this.articuloTitulo = result.titulo;
        this.articuloPreLectura = result.preLectura;
        this.articuloContenido = result.contenido;
        this.categoriaNombre = result.categoria.nombre;
      });

    });
  }


}
