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

  constructor(private articulosService: ArticulosService, private router: Router) { }
  
  articulos: Articulo[] = [];

  ngOnInit(): void {
    this.getAll();
    console.log("resul: ");
  }

  getAll(){
    this.articulosService.getAll(1, 10).subscribe(n => {
      console.log("resultado: ");
      console.log(n);
    },
    e => {

    })
  }

  redireccionar(id: number) {
     const articulo = this.articulos.find(x => x?.id == id);
     console.log(articulo?.nombreDeRuta);
     this.router.navigate(['/articulo/' + articulo?.nombreDeRuta]);
  }
}
