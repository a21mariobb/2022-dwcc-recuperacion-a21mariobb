//Ejercicio 1
//Crea unha función á que se lle pase como parámetro o número de minutos e devolva un string indicando a súa equivalencia en horas e minutos.
function CalcularHorasMinutos(num) {
    const horas = num/3600;
    const minutos = (num%3600)/60;
    console.log(Math.trunc(horas) + ' horas y ' + Math.round(minutos) + ' minutos');
}
console.log(CalcularHorasMinutos(8000));



//Ejercicio 2
//Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o resultado das funcións usando dúas cifras decimais.
function areaCirculo(radio) {
    const area = Math.PI * Math.pow(radio, 2);
    console.log(area.toFixed(2));
}
console.log(areaCirculo(3));

function perimetroCirculo(radio) {
    const perimetro = (Math.PI * 2 * radio);
    console.log(perimetro.toFixed(2));
}
console.log(perimetroCirculo(3));