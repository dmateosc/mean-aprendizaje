

var miFuncion = (parametro1, parametro2, ...miFuncion) => 
parametro1 + parametro2 + miFuncion.reduce((numero1, numero2) => numero1 + numero2);


console.log(miFuncion(2,3,4,5,6,7,8))

var funcioArrayNombres = [
    'Pepe', 'Jose', 'Pepe'
]

var nombres = funcioArrayNombres.reduce((nombre,nombres)=>{
    nombre[nombres] = (nombre[nombres] || 0 ) + 1; 
    return nombre;
}, {})



var nombres = funcioArrayNombres.map(nombre => nombre.length);
console.log(nombres)