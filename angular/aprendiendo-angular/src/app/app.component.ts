import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'aprendiendo-angular';
  public mostrar_videojuegos: boolean = true;
  public config;

  constructor(){
    this.title = configuracion.titulo;
    this.config = configuracion;
  }

  mostrarOcultarVidejuego(){
    if(this.mostrar_videojuegos){
     this.mostrar_videojuegos = false;
    }else{
      this.mostrar_videojuegos = true;
    }

  }
}
