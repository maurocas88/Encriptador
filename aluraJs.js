// Variables
let cript=document.querySelector ('#cript');
let decript=document.querySelector ('#decript');
let copyCript=document.querySelector ('.copy2');
let copyDecript=document.querySelector ('.copy1');
// let encriptado=document.querySelector ('#text2');
let portapapeles="";
let cripter=[];


// event Listeners
eventListeners();
// mostrar1();
function eventListeners (){
    cript.addEventListener('click', encriptando);
    decript.addEventListener('click', desencriptando);
    copyDecript.addEventListener('click', copy);
    copyCript.addEventListener('click', copy);

}



// Funciones
function encriptando(e){
    e.preventDefault();
    const textoD = document.querySelector('#decripted');

    if(validar(textoD)){    // Valida el valor de texto ingresado
        let textoCifrado=cifrar(textoD.value);
        document.querySelector('#cripted').value=textoCifrado;

        textoD.value="";
    }
    else {
        alert("false=");
    }
}

function desencriptando(e){
    e.preventDefault();
    const textoE = document.querySelector('#cripted');
    if(validar(textoE)){    // Valida el valor de texto ingresado
        let textoDescifrado=decifrar(textoE.value);
        document.querySelector('#decripted').value=textoDescifrado;

        textoE.value="";
    }
}

function copy(e){
    e.preventDefault();
    const texto=e.target.parentElement.parentElement.children[1].children[0];
    
    if(validar(texto)){    // Valida el valor de texto ingresado
        alert("true? "+texto.value);
    }
    else {
        alert("El texto no se pudo copiar");
    }
}

function validar(text){   // Valida el valor del texto ingresado

    if(text.value===''){
        // vacioMsg('No hay contenido para agregar');
        alert('No hay contenido para agregar');
    }
    
    else if (/[A-Z]/.test(text.value) || (!/[0-9]/.test(text.value) && !/[a-z]/.test(text.value))) {
        alert("El texto ingresado no es correcto. Es obligatorio, usar minusculas y evitar caracteres especiales");
    } 
    else{    
        return true;
    }
}

function cifrar(tDecifrado){

    let cifrando="";
    cifrando=tDecifrado;
    const encriptado=cifrando.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    return encriptado;

}
function decifrar(tCifrado){
    let decifrando="";
    decifrando=tCifrado;
    const desencriptado=decifrando.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ai/g,"a").replace(/ufat/g,"u");
    return desencriptado;

}
    

    // La letra "a" es convertida para "ai"
    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"
    
