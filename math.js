console.group('Cuadrado');



/* Calculos con cuadrado */

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularCuadrado(lado) {
    return {
        perimetro: lado*4,
        area: lado*lado
    };
}



console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

console.groupEnd('Cuadrado');

console.group('Triangulo');

/* Calculos con triangulo */

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        petimetro: lado1+lado2+base,
        area: (base*altura)/2
    };
}


function calcularAlturaTriangulo(lado1, base) {
    if(lado1 == base) {
        console.warn('Este no es un triangulo isosceles');
    }else {
        return Math.sqrt(Math.pow(lado1, 2) - (Math.pow(base, 2)/4)).toFixed(3);
    }
}




console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    perimetroTriangulo,
    ladoTrianguloBase,
    alturaTriangulo,
    areaTriangulo
});

console.groupEnd('Triangulo');


/* Calculos con circulo  */

console.group('Circulo');

const radioCirculo = 3;
const diametroCirculo = radioCirculo*2;
const PI = 3.1415;

const circunferencia = diametroCirculo*PI;
const areaCirculo = (radioCirculo**2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    circunferencia,
    areaCirculo
});

function calcularCirculo(radio) {
    const diametro = radio*2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI
    };
}


console.groupEnd('Circulo');







