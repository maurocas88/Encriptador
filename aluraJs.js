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

    captar(textoD);    // Capta el valor del texto ingresado
    textoD.value="";

    }
function desencriptando(e){
    e.preventDefault();
    const textoE = document.querySelector('#cripted');
    captar(textoE);    // Capta el valor del texto ingresado
    textoE.value="";

    
}
function copy(e){
    e.preventDefault();
    const texto=e.target.parentElement.parentElement.children[1].children[0];
    captar(texto);    // Capta el valor del texto ingresado
 }

function captar(text){
    // Captura el valor del texto ingresado
    if(text.value===''){
        // vacioMsg('No hay contenido para agregar');
        alert('No hay contenido para agregar');
    }
    else if(text.value!=text.value.toLowerCase){    
        alert('Contenido no valido');
        // alert('publicacion exitosa '+ text.value);
        cifrar(text.value);
        decifrar(text.value);
    }

    function cifrar(tDecifrado){
        let cifrando="";
        cifrando=tDecifrado;
        const encriptado=cifrando.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
        alert('publicacion exitosa '+ encriptado);
   
    }
    function decifrar(tCifrado){
        let decifrando="";
        decifrando=tCifrado;
        const desencriptado=decifrando.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ai/g,"a").replace(/ufat/g,"u");
        alert('publicacion exitosa '+ desencriptado);
   
    }
    

    // La letra "a" es convertida para "ai"
    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"
    
}
