"use strict";
exports.__esModule = true;
//clase camiseta
var Camiseta = /** @class */ (function () {
    function Camiseta() {
        this.color = "";
        this.modelo = "";
        this.marca = "";
        this.talla = "";
        this.precio = 0;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.color = "rojo";
camiseta.modelo = "Manga larga";
camiseta.marca = "nike";
camiseta.talla = "XL";
camiseta.precio = 15;
