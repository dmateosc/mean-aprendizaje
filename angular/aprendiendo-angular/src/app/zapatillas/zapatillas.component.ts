import { Component, OnInit } from '@angular/core'
import { Zapatilla } from '../models/zapatilla'
import { ZapatillaService } from '../services/zapatilla.service'


/* Importante el component contiene el selector que utilizaremos cuando carguemos la "clase" dentro del componente que muestra otras plantillas  es decir el app module
y también contiene el html al que hace referencia
*/
@Component({
    selector: 'app-zapatilas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService] //aqui irían los injectables de los servicios

})


export class ZapatillasComponent implements OnInit{

    public titulo : string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: String;
    public mi_marca: String;
    constructor(private _zapatillaService: ZapatillaService){        
        this.color = "yellow";
        this.marcas = new Array();
        
    }
    ngOnInit(): void {
        this.zapatillas = this._zapatillaService.getZapatillas();
        console.log(this.zapatillas);
        this.getMarcas();
        this.color = this.getColorPredominante();
    }

    onBlur():void{
        console.log("Has salido del input");
    }
    mostrarPalabra(){
        alert(this.mi_marca);
    }
    getMarcas(){
        this.zapatillas.forEach((zapatilla,index) => {
            if(this.marcas.indexOf(zapatilla.marca)< 0){
                this.marcas.push(zapatilla.marca);
            }
            
            console.log(index);
        });

        console.log(this.marcas);
    }
    getMarca(){
        return this.mi_marca;
    }
    setMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(indice):void{
        this.marcas.splice(indice,1);
    }

    getColorPredominante():String{
        let colores: any;
        colores = new Array<any>();
        //con esto unificamos todos los colores
        colores = this.unificadorColores();
        console.log(colores);
        let elementoAlto:String;
        let auxComprobar: number = 0;
        // con esto comprobamos cual es el elemento que es más alto
        for (let element in colores) {
            if(auxComprobar<colores[element]){
                auxComprobar = colores[element];
                elementoAlto = element;
            }
        }
        console.log(elementoAlto);
        return elementoAlto;
    }
    unificadorColores():any{
        return this.zapatillas.reduce((zapatilla,index) => {
            zapatilla[index.color.toLowerCase()] = (zapatilla[index.color.toLowerCase()] || 0)  + 1;
            return zapatilla;
        },{})
    }

}