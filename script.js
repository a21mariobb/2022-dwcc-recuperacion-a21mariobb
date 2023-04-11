// Ejercicio 1
// Mostra o día da semana (en letra) do 25 de xullo de 2000.
const date1 = new Date('July 25, 2000');
const date2 = date1.getDay();
switch(date2){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 0:
        console.log("Domingo");
        break;
};



// Ejercicio 2
// Mostra o día da semana (en letra) do 25 de xullo deste ano.
const date3 = new Date();
const añoActual = date3.getFullYear();
const date4 = new Date('July 26, ' + añoActual);
const date5 = date4.getDay();
switch(date5){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 0:
        console.log("Domingo");
        break;
};



// Ejercicio 3
// Calcula o número de días que pasaron dende o 25 de xullo de 2000 ata hoxe.
const date6 = new Date();
const date7 = new Date('July 25, 2000');

const diffAños =  date6.getFullYear() - date7.getFullYear();
diffAñosT = (diffAños * 365);

const diffMeses = parseInt(date6.getMonth()) - parseInt(date7.getMonth());
diffMesesT = (diffMeses * 30);

const diffDias = parseInt(date6.getDate()) - parseInt(date7.getDate());

const diffTotales = diffAñosT + diffMesesT + diffDias;
console.log(diffTotales);



// Ejercicio 4
// Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de días dese mes.
function DiasMes(mes){
    return new Date(2023, mes, 0).getDate();
}

console.log(DiasMes(3));



// Ejercicio 5
// Crea unha función á que se lle pase unha data e diga se é fin de semana.
function calcularFinSemana(date){
    return(Date.parse(date))
}

console.log(calcularFinSemana('10, 24, 2023')) 