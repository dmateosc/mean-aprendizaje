'use strict';



function fibonnacci(n){

    if(n>1){

        return fibonnacci(n-1) + fibonnacci(n-2);
    }
    else if (n==1) {  // caso base
        return 1;
    }
    else if (n==0){  // caso base
        return 0;
    }
}

var numero = 16;
var vuelta = i;
for(var i = 0; i <= numero; i++){
    
    console.log("El fibonacci de "+ i +" es "+fibonnacci(i))
}

console.log("Aqui termina el recursivo")


function fibonnacci2(n){
    let num1 = 0;
    let num2 = 1;
    let numFinal = 0;
    for(let i = 0; i <= n; i++){
        if(i == 0){
            console.log(i);    
        
        }else {
            console.log(numFinal);  
            numFinal = num1  + num2;
            num1 = num2;
            num2 = numFinal;
        }
        
        

        
    }       

}


fibonnacci2(15)