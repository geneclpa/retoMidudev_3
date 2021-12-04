/*
Página web: https://adventjs.dev/
Challenges: 3

    El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

    Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

    Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

    ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...
*/

const letter1 = "bici coche (balón) bici coche peluche"; //true
const letter2 = "(muñeca) consola bici"; // true
const letter3 = "bici coche (balón bici coche"; //false
const letter4 = "peluche (bici [coche) bici coche balón"; //false
const letter5 = "(peluche {) bici"; //false
const letter6 = "() bici"; //false
const letter7 = "(()) bici"; //false

/* Cambiar la constante letter dependiendo de la que se quiera evaluar  */
const obj = letter1.split(' ');

const result = obj.map(e => {
    e.toLowerCase().trim();
    if(e !== ''){
        if(e.startsWith('(') && e.endsWith(')') && (e.includes('[') || e.includes(']'))){
            return false;
        }else if(e.startsWith('(') && e.endsWith(')') && e.length === 2){
            return false;
        }else if(e.startsWith('(') && !e.endsWith(')')){
            return false;
        }else if(!e.startsWith('(') && e.endsWith(')')){
            return false;
        }else if(e.startsWith('[') || e.endsWith(']')){
            return false;
        }else if(e.includes('{') || e.includes('}')){
            return false;
        }else{
            let count = 0;
            e.split('').filter(f => {
                if(f === '(' || f === ')') count++;
            });
            if(count > 2) return false;
            return true;
        }
    }
});

console.log(!result.includes(false));