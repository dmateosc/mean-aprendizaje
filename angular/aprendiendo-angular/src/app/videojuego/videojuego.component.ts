import { Component, OnInit,DoCheck, OnDestroy } from '@angular/core'
import {configuracion} from '../models/configuracion'

@Component({

    selector : 'app-videojuego',
    templateUrl : './videojuego.component.html'


})

export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy{

    public titulo : string;
    public listado : string;


    constructor(){

        this.titulo = configuracion.titulo + " Videojuegos";
        this.listado = "Listado de los juegos más populares";
        console.log("Se ha cargado de component videjouego.component.ts");
    }
    ngOnDestroy(): void {
        console.log("OnDestroy ejecutado");
    }
    ngDoCheck(): void {
        console.log("Se ha ejecutado el DoCheck");
    }
    ngOnInit(): void {
    }

    cambiarTitulo(){
        this.titulo = "Nuevo Titulo del componente";
    }


}