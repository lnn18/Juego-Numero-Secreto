let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let limitador = 4;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == limitador) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

//1.
let listaGenerica = [];

//2.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3.
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');
//lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//4.
function leerElementosListaArriba(lista) {
    for (let index = 0; index = lista.length; index++) {
        const element = lista[index];
        console.log(`La lista en la posicion ${index} tiene el valor ${element}`);
    }
}
leerElementosListaArriba(lenguajesDeProgramacion);

//5.
function leerElementosListaAbajo(lista) {
    for (let index = lista.length-1; index >= 0; index--) {
        const element = lista[index];
        console.log(`La lista en la posicion ${index} tiene el valor ${element}`);
    }
}
leerElementosListaAbajo(lenguajesDeProgramacion);

//6.
function calcularPromedio(listaNumeros) {
    let suma = 0;
    for (let index = 0; index < listaNumeros.length; index++) {
        const element = listaNumeros[index];
        suma += element;
        //suma += listaNumeros[index];
    }
    let promedio = suma / listaNumeros.length;
    return promedio;
    //return suma / listaNumeros.length;
}
let listaNumeros = [5, 7, 9, 3, 8];
console.log(calcularPromedio(listaNumeros));

//7.
function menorMayor(lista) {
    let mayor = lista(0);
    let menor = lista(0);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(menor > element){
            menor = element;
        }
        if(mayor < element){
            mayor = element;
        }
    }
    console.log(`el numero mayor es ${mayor} y el numero menor es ${menor}`);
}
menorMayor(listaNumeros);

//8.
function sumaDeNumeros(lista) {
    let suma = 0;
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        suma += element;
        //suma += lista[index];
    }
    return suma;
}
console.log(sumaDeNumeros(listaNumeros));

//9.
function elementoEnLista(lista, parametro) {
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        //if (lista[index] === parametro)
        if (element === parametro) {
            return index;
        }
    }
    return -1;
}
let parametro = 9;
elementoEnLista(listaNumeros, parametro);
console.log(index);

//10.
function devolverSumaListas(lista1, lista2) {
    let lista3 = [];
    for (let index = 0; index < lista1.length; index++) {
        lista3[index] = lista1[index] + lista2[index];
    }
    return lista3;
}
let lista1 = [20, 31, 40, 10, 6, 3];
let lista2 = [13, 9, 25, 32, 25, 19];
console.log(devolverSumaListas(lista1, lista2));

//11.
function devolverCuadrado(lista) {
    let lista1 = [];
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        lista1[index] = element * element;
        //lista1[index] = lista[index] * lista[index];
    }
    return lista1;
}

console.log(devolverCuadrado(listaNumeros));