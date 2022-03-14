import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from './articulos';
import { ArticulosService } from './articulos.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  
  paginaActual: number = 1;
  cantidadDePaginas: number = 1;
  cantidadDePaginasArr: number[];
  cantidadDeRegistrosAMostrar: number = 3;  
  articulos: Articulo[];
  cantidadTotalDeRegistros: any;

  constructor(private articulosService: ArticulosService, private router: Router) { }
  
  ngOnInit(): void {
    this.getAll(this.paginaActual, this.cantidadDeRegistrosAMostrar);
  }

  getAll(pagina: number, cantidadDeRegistrosAMostrar: number) {
    this.articulosService.getAll(pagina, cantidadDeRegistrosAMostrar).subscribe((result : HttpResponse<Articulo[]>) => {
     this.cantidadTotalDeRegistros = result.headers.get('cantidadTotalDeRegistros');
     this.cantidadDePaginas = Math.ceil(this.cantidadTotalDeRegistros / this.cantidadDeRegistrosAMostrar);
     this.articulos = result.body!;

     // inicio - manejo de los botones del paginador
     this.cantidadDePaginasArr = [];
     if(this.paginaActual > 1){
      this.cantidadDePaginasArr.push(this.paginaActual - 1);
     }
     for (var i = this.paginaActual; i <= (this.paginaActual + 1); i++){
      this.cantidadDePaginasArr.push(i);
     }
     if(this.cantidadDePaginasArr[this.cantidadDePaginasArr.length -1] > this.cantidadDePaginas){
      this.cantidadDePaginasArr.pop();
     }
     // fin - manejo de los botones del paginador
     
    });
  }

  anterior() {
    if(this.paginaActual > 1){
      this.paginaActual -= 1;
      this.getAll(this.paginaActual, this.cantidadDeRegistrosAMostrar);
    }
  }

  siguiente() {
    if (this.cantidadDePaginas > this.paginaActual){
      this.paginaActual += 1;
      this.getAll(this.paginaActual, this.cantidadDeRegistrosAMostrar);
    }
  }

  seleccion(pagina: number) {
    this.paginaActual = pagina;
    this.getAll(this.paginaActual, this.cantidadDeRegistrosAMostrar);
  }

  redireccionar(id: number) {
     const articulo = this.articulos.find(x => x?.id == id);
     console.log(articulo?.nombreDeRuta);
     this.router.navigate(['/articulo/' + articulo?.nombreDeRuta]);
  }
}
