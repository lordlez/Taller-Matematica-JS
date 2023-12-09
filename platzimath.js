



const PlatziMath = {};


PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2);
}

PlatziMath.esImpar = function esImpar(lista) {
    return (lista.length % 2);
}   


PlatziMath.calcularModa = function calcularModa(lista) {
    const listaCount = {};

    for(let i = 0; i<lista.length; i++) {
        const elemento = lista[i];

        //si exista el elemento, sumar 1 cada vez que aparezca
        if(listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else { //si no existe el elemento, poner un 1
            listaCount[elemento] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);
    console.log(listaCount, listaArray);

    const listaOrdenada = PlatziMath.ordenarListaBidimensional(listaArray, 1);

    const listaOrdenadaMaxNumber = listaOrdenada[listaOrdenada.length -1];

    //console.log({listaCount, listaArray, listaOrdenada, listaOrdenadaMaxNumber}); 

    console.log('La moda es: ' + listaOrdenadaMaxNumber[0]);
    const moda = listaOrdenadaMaxNumber[0];
    return moda;
}   
 

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista);

    if(listaEsPar) {
        // const indexMitad1ListaPar = (lista.length / 2) - 1;
        // const indexMitad2ListaPar = lista.length / 2;
        const mitad1ListaPar = lista[(lista.length / 2) - 1];
        const mitad2ListaPar = lista[lista.length / 2];
        const listaMitades = [mitad1ListaPar, mitad2ListaPar];
        return PlatziMath.calcularPromedio(listaMitades);
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}


PlatziMath.calcularPromedio = function calcularPromedio(lista) {
    // let sumaLista = 0;

    // for(let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i];
    // }

    // function sumarTodosLosElementos(valorAcumulado, nuevoValor) {
    //     return valorAcumulado + nuevoValor;
    // }

    // const sumaLista = lista.reduce(sumarTodosLosElementos);


    const sumarTodosLosElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;

    const sumarLista = lista.reduce(sumarTodosLosElementos);

    const promedio = sumarLista / lista.length;
    console.log(promedio);
    return promedio;
}


PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado - nuevoValor;
    }


    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}


PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}   








