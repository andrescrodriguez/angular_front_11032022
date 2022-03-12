import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { articulosDTO } from './articulos';
import { ArticulosService } from './articulos.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(private articulosService: ArticulosService, private router: Router) { }

  articulo: any;
  articulos: articulosDTO[] = [];

  ngOnInit(): void {

    // this.articulos = [];

    // const todos = this.articulosService.getAll().subscribe(params => {
    //     console.log(params);

    //     for(let i = 0; i < params.length; i++){
    //       this.articulos.push({ Id: params[i].Id,
    //         Titulo: params[i].Titulo,
    //         PreLectura: params[i].PreLectura,
    //         Contenido: params[i].Contenido,
    //         NombreDeRuta: params[i].NombreDeRuta }
    //       );
    //     }

    //     return this.articulos;

    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );

    setTimeout(() =>{
      this.articulos = [
        {
          Id: 1,
          Titulo: "Titulo 1",
          PreLectura: "Prelectura 1",
          Contenido: "Contenido 1",
          NombreDeRuta: "categoria-1/nombre-de-ruta-1",
        },
        {
          Id: 2,
          Titulo: "Titulo 2",
          PreLectura: "Prelectura 2",
          Contenido: "Contenido 2",
          NombreDeRuta: "categoria-2/nombre-de-ruta-2",
        },
        {
          Id: 3,
          Titulo: "Titulo 3",
          PreLectura: "Prelectura 3",
          Contenido: "Contenido 3",
          NombreDeRuta: "categoria-3/nombre-de-ruta-3",
        },
        {
          Id: 4,
          Titulo: "Titulo 4",
          PreLectura: "Prelectura 4",
          Contenido: "Contenido 4",
          NombreDeRuta: "categoria-4/nombre-de-ruta-4",
        },
        {
          Id: 5,
          Titulo: "Titulo 5",
          PreLectura: "Prelectura 5",
          Contenido: "Contenido 5",
          NombreDeRuta: "categoria-5/nombre-de-ruta-5",
        },
        {
          Id: 5,
          Titulo: "Titulo 5",
          PreLectura: "Prelectura 5",
          Contenido: "Contenido 5",
          NombreDeRuta: "categoria-5/nombre-de-ruta-5",
        },
        {
          Id: 5,
          Titulo: "Titulo 5",
          PreLectura: "Prelectura 5",
          Contenido: "Contenido 5",
          NombreDeRuta: "categoria-5/nombre-de-ruta-5",
        },
        {
          Id: 6,
          Titulo: "Titulo 6",
          PreLectura: "Prelectura 6",
          Contenido: "Contenido 6",
          NombreDeRuta: "categoria-6/nombre-de-ruta-6",
        },
        {
          Id: 7,
          Titulo: "Titulo 7",
          PreLectura: "Prelectura 7",
          Contenido: "Contenido 7",
          NombreDeRuta: "categoria-7/nombre-de-ruta-7",
        },
        {
          Id: 8,
          Titulo: "Titulo 8",
          PreLectura: "Prelectura 8",
          Contenido: "Contenido 8",
          NombreDeRuta: "categoria-8/nombre-de-ruta-8",
        },
        {
          Id: 9,
          Titulo: "Titulo 9",
          PreLectura: "Prelectura 9",
          Contenido: "Contenido 9",
          NombreDeRuta: "categoria-9/nombre-de-ruta-9",
        },
        {
          Id: 10,
          Titulo: "Titulo 10",
          PreLectura: "Prelectura 10",
          Contenido: "Contenido 10",
          NombreDeRuta: "categoria-10/nombre-de-ruta-10",
        },
        {
          Id: 11,
          Titulo: "Titulo 11",
          PreLectura: "Prelectura 11",
          Contenido: "Contenido 11",
          NombreDeRuta: "categoria-11/nombre-de-ruta-11",
        },
        {
          Id: 12,
          Titulo: "Titulo 12",
          PreLectura: "Prelectura 12",
          Contenido: "Contenido 12",
          NombreDeRuta: "categoria-12/nombre-de-ruta-12",
        },
        {
          Id: 13,
          Titulo: "Titulo 13",
          PreLectura: "Prelectura 13",
          Contenido: "Contenido 13",
          NombreDeRuta: "categoria-13/nombre-de-ruta-13",
        },
        {
          Id: 14,
          Titulo: "Titulo 14",
          PreLectura: "Prelectura 14",
          Contenido: "Contenido 14",
          NombreDeRuta: "categoria-14/nombre-de-ruta-14",
        },
        {
          Id: 15,
          Titulo: "Titulo 15",
          PreLectura: "Prelectura 15",
          Contenido: "Contenido 15",
          NombreDeRuta: "categoria-15/nombre-de-ruta-15",
        },
      ]
    },1000);
    
    
  }

  redireccionar(id: number) {
    this.articulo = this.articulos.find(x => x.Id == id);
    console.log(this.articulo.NombreDeRuta);
    this.router.navigate(['/articulo/' + this.articulo.NombreDeRuta]);
  }

  
}
