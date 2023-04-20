//Ejercicio 1
//Crea unha función á que se lle pase unha cadea e devolva a cadea en sentido inverso.
function reverseString(string){
    const arrayLetras = string.split("");
    const arrayReverse = arrayLetras.reverse();
    console.log(arrayReverse.join(""));
}
console.log(reverseString("I am a string")) 



//Ejercicio 2
//Crea unha función á que se lle pase unha cadea e un array de caracteres e devolva a cadea orixinal eliminando os caracteres do array.
function removeCharacters(string, pattern){
    const stringFinal = string.replaceAll(pattern, " ");
    console.log(stringFinal);
}
console.log(removeCharacters("I am an example string", 'a'));












