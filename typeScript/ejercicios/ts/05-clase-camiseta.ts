export{}

//clase camiseta
class Camiseta{
    public color: string ="";
    public modelo: string = "";
    public marca: string = ""; 
    public talla: string = "";
    public precio: number = 0; 

    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }

}


var camiseta = new Camiseta();

camiseta.color= "rojo";
camiseta.modelo = "Manga larga";
camiseta.marca = "nike";
camiseta.talla = "XL";
camiseta.precio = 15;