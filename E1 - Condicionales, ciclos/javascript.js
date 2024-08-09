/* Ejercicio 1 */
function ParImpar(numero){
    if(numero % 2 == 0){
        console.log( `El número ${numero} es par`);
    } else {
        console.log( `El número ${numero} es impar`);
    }
}

ParImpar(2);

/* Ejercicio 2 */
function numeroMayor(num1, num2){
    if(num1 > num2){
        console.log(`El número ${num1} es mayor que el número ${num2}`);
    }
    if(num2 > num1){
        console.log(`El número ${num2} es mayor que el número ${num1}`);
    }
    if(num1 == num2){
        console.log(`El número ${num1} es igual que el número ${num2}`);
    }
}

numeroMayor(3,2)

/* Ejercicio 3 */
function múltiploDe5(numero){
    if(numero % 5 == 0){
        console.log( `El número ${numero} es múltiplo de 5`);
    } else {
        console.log( `El número ${numero} no es múltiplo de 5`);
    }
}

múltiploDe5(7);

/* Ejercicio 4 */
function contador(numero){
    for(var i=0; i <= numero; i++){
        console.log(i);
    }
}
contador(3);   

/* Ejercicio 5 */
function numeroPalabra(num, pal){
    var i=0;
    while(i<num){
        console.log(pal);
        i=i+1;
    }
}
numeroPalabra(5,"Hola");

/* Ejercicio 6 */
function arrayPorParametro(a){
    for(var i=0; i < a.length; i++){
        console.log(a[i]);
    }
}

arrayPorParametro([1,2,3,4])

/* Ejercicio 7 */
function arrayPorParametro(a){
    if (a.length == 10){
        for(var i=0; i < a.length; i++){
           if (i === 5){
              continue;
           } else {
                console.log(a[i]);
           }
        }
    } else {
        console.log("Error, el array debe contener 10 números.")
    }
}

arrayPorParametro([1,2,3,4,5,6,7,8,9,10]); 

/* Ejercicio 8 */
function arrayNumerosPorParametro(a, num){
    var resultado;
    for(var i=0; i < a.length; i++){
       resultado = a[i]*num;
       console.log(resultado);
    }
}

arrayNumerosPorParametro([1,2,3,4], 2)

