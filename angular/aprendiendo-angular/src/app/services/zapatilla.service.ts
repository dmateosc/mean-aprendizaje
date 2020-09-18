//este es importante para poder exportar esto como un servicio
import {Injectable} from '@angular/core'
import {Zapatilla} from '../models/zapatilla'

@Injectable()
export class ZapatillaService{

    public zapatillas: Array<Zapatilla>;
   
    constructor(){
        this.zapatillas = [new Zapatilla('Reebook Classic', 'Reebok','Blancas', 85, true)];
    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
    setZapatillas(zapatillas: Array<Zapatilla>) {
        this.zapatillas = zapatillas;
    }


}
