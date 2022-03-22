import { Categoria } from "../models/categoria";

export interface Articulo{
    id: number;
    titulo: string;
    nombreDeRuta: string;
    categoriaNombre: string;
    categoriaNombreDeRuta: string;
    fechaHoraPublicacion: Date;
    fechaHoraAlta: Date;
    fechaHoraUltimaActualizacion: Date;
    preLectura: string;
    contenido: string;
    fechaHoraBaja: Date;
    imagenRuta: string;
    categoria: Categoria;
}