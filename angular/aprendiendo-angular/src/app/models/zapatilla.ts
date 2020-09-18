export class Zapatilla{
    /*
    public nombre: string;
    public precio: number;
    public marca: string;
    public color: string;
    public stock: boolean;

    constructor(nombre:string, marca:string, color:string, precio:number,stock:boolean){

        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
    }
    */
   constructor(
        public nombre:string, 
        public marca:string, 
        public color:string,
        public precio:number,
        public stock:boolean){}


}

/*Genera una entity que puede ser utilizada en la clase (componente) que desees normalmente se delcara con el nombre en singular*/