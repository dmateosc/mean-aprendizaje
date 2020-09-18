import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId : any;
  public fecha: any;

  public newUsers: any;
  public usuarioRegistrado: any;


  constructor(
    private _peticionesService: PeticionesService) {
      this.userId = 1;
      this.newUsers = {
        "name" : "",
        "job": ""
      }
  }
  ngOnInit(): void {
    this.fecha = new Date();
    this.cargaUsuario();

  }
  cargaUsuario(){
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result =>{
        this.user = result.data;
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form){

    this._peticionesService.addUser(this.newUsers).subscribe(
      response => {
        console.log(response);
        this.usuarioRegistrado = response.name;
      }, 
      error =>{
        console.log(<any>error)
      }

    )

  }

}
