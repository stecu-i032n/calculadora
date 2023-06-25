"use strict"
//Definimos variables a utilizar
let primerNumero, segundoNumero, tipoOperacion, resultado;

//Definimos una funcion para limpiar la pantalla
function fnLimpiarPantalla(){
    display.value = " ";
    //Agrega estefmetodo para permitirnos volver a usar el boton decimal al elgir una operacion
    document.getElementById("botonDecimal").disabled=false;
} 

//Definimos una funcion para marcar los numero en la pantalla desde los botones
function fnMarcarNumero(n){
    display.value = display.value + n;
}

//Definimos una funcion para recibir la operacion
function fnOperacion(op){
    primerNumero = Number(display.value);
    fnLimpiarPantalla();
    tipoOperacion = Number(op);
}

//Definimos la funcion para el boton igual
function fnOperar(){
    segundoNumero = Number(display.value);
    fnLimpiarPantalla();
    switch(tipoOperacion){
        case 1:
            resultado = primerNumero + segundoNumero;
        break;
        case 2:
            resultado = primerNumero - segundoNumero;
        break;
        case 3:
            resultado = primerNumero * segundoNumero;
        break;
        case 4:
            resultado = primerNumero / segundoNumero;
        break;
        case 5:
            resultado = Math.pow(primerNumero, segundoNumero);
    }

    //Agrega if para las posibles operaciones no validas, como 0/0
    if(isNaN(resultado) == true){
        alert("OPERACION NO VALIDA");
    //Agrega else if si el resultado supera los número maximos mostrados por la calculadora
    }else if(resultado > 10000000000){
        alert("EL RESULTADO DE SU OPERACION SUPERA A LOS DATOS MAXIMOS POSIBLES MOSTRADOS POR LA CALCULADORA, EL RESULTADO DE SU OPERACION ES: " + resultado);
    //Agrega un condional else if que nos permite mostrar los resultados cuando son decimales y cuando no
    }else if(resultado % 1 !== 0){
        display.value = resultado.toFixed(2);
    }else{
        display.value = resultado;
    }
}

//Definimos una funcion para el boton porcentaje
function fnPorcentaje(){
    segundoNumero = Number(display.value);
    fnLimpiarPantalla();
    resultado = primerNumero * (segundoNumero / 100);
    display.value = resultado.toFixed(2);
}

//Definimos una funcion para cambio de signo
function fnCambiarSigno(){
    display.value = Number(display.value) * -1;
}

//Definimos una variante de la fnMarcarNumero unicamente para el boton decimal y que no permita marcarlo más de una vez
function fnLimiteDecimal(n){
    display.value = display.value + n;
    document.getElementById ("botonDecimal").disabled=true;
}