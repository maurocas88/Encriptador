
// ************ Variables ************
let cript=document.querySelector ('#cript');
let decript=document.querySelector ('#decript');
let copyCript=document.querySelector ('.copy2');
let copyDecript=document.querySelector ('.copy1');
let portapapeles="";
let info=document.querySelector ('.informacion');
let imagenInicial=document.querySelector ('.imagen_inicial');
let btnCopy1=document.querySelector ('.copy1');
let btnCopy2=document.querySelector ('.copy2');


let cripter=[];


// ************ Event Listeners ************
eventListeners();

function eventListeners (){
    cript.addEventListener('click', encriptando);
    decript.addEventListener('click', desencriptando);
    copyDecript.addEventListener('click', copy);
    copyCript.addEventListener('click', copy);

}


// ************ Funciones ************
function encriptando(e){
    e.preventDefault();
    const textoD = document.querySelector('#decripted');

    if(validar(textoD)){    // Valida el valor de texto ingresado
        let textoCifrado=cifrar(textoD.value);
        document.querySelector('#cripted').value=textoCifrado;
        textoD.value="";
    }
}

function desencriptando(e){
    e.preventDefault();
    const textoE = document.querySelector('#decripted');
    if(validar(textoE)){    // Valida el valor de texto ingresado
        let textoDescifrado=decifrar(textoE.value);
        document.querySelector('#cripted').value=textoDescifrado;
        textoE.value="";
    }
}

function copy(e){
    e.preventDefault();
    let elemento=e.target;

    while(!elemento.classList.contains("texto1") && !elemento.classList.contains("texto2")){
        elemento=elemento.parentElement; //Subimos al elemento padre - hasta estar en el "sector 1" o "sector 2"
    }  
    
    const texto=elemento.children[1].children[0]; //luego descendemos hasta el "campoTexto"

    if(validar(texto)){    // Valida el valor de texto ingresado
        navigator.clipboard.writeText(texto.value)
        texto.select();

    }
    else {
        // alert("El texto no se pudo copiar");
    }
}

function validar(text){   // Valida el valor del texto ingresado

    if(text.value===''){
        // vacioMsg('No hay contenido para agregar');
        alert('No hay contenido para agregar');
    }
    
    else if (/[A-Z]/.test(text.value) || (!/[0-9]/.test(text.value) && !/[a-z]/.test(text.value))) {
        info.style.color='#ff0000';
        info.style.transform= 'scale(1.2)';
        info.style.margin='10px 0% 10px 10%';

        // alert("El texto ingresado no es correcto. Es obligatorio, usar minusculas y evitar caracteres especiales");
        setTimeout (function(){
            info.style.color=null;
            info.style.transform= null;
            info.style.margin=null;
        },1000);
    } 
    else{
        btnCopy1.style.visibility='visible';
        btnCopy2.style.visibility='visible';
        imagenInicial.style.visibility= 'hidden';
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
    
