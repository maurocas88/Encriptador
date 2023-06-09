
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
const compartir=document.getElementById("compartir");

let cripter=[];


// ************ Event Listeners ************
eventListeners();

function eventListeners (){
    cript.addEventListener('click', encriptando);
    decript.addEventListener('click', desencriptando);
    copyDecript.addEventListener('click', copy);
    copyCript.addEventListener('click', copy);
    compartir.addEventListener('click', compartiendo);

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
        portapapeles=texto.value;
        navigator.clipboard.writeText(texto.value)
        texto.select();
    }
    else {
        // alert("El texto no se pudo copiar");
        info.textContent="El texto no se pudo copiar";
        destacarInfo();

    }
}

function validar(text){   // Valida el valor del texto ingresado

    if(text.value===''){
        info.textContent="No hay contenido para agregar";
        destacarInfo();
    }
    
    else if (/[A-Z]/.test(text.value) || (!/[0-9]/.test(text.value) && !/[a-z]/.test(text.value))) {
        destacarInfo();
    } 
    else{
        btnCopy1.style.visibility='visible';
        btnCopy2.style.visibility='visible';
        compartir.style.visibility='visible';
        imagenInicial.style.visibility= 'hidden';
        return true;
    }
}
function destacarInfo(){
    info.style.color='#ff0000';
    info.style.transform= 'scale(1.2)';
    info.style.margin='10px 0% 10px 10%';

    // Destacamos que es obligatorio, usar minusculas y evitar caracteres especiales y luego se vuelve al estado inicial
    setTimeout (function(){
        info.style.color=null;
        info.style.transform= null;
        info.style.margin=null;
        info.textContent= 'Solo minúsculas, sin acentos ni caracteres especiales';

    },1500);

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

function compartiendo(e){
    e.preventDefault();
    let click = new Event("click");     //creamos un evento click
    copyCript.dispatchEvent(click);     //Copiamos el texto encriptado

    if (e.target.classList.contains("shareW1")||e.target.classList.contains("shareW2")){
        enviarWhatsaap(portapapeles, e);
    }
    if (e.target.classList.contains("shareT1")||e.target.classList.contains("shareT2")){
        enviarTelegram(portapapeles, e);
    }
}

function enviarWhatsaap(mensaje, e){
    if (detectar_movil()=="movil"){
        if (e.target.classList.contains("shareW1")){ // movil - mensaje solo
            window.open("https://api.whatsapp.com/send?text=*mensaje encriptado*:" + encodeURIComponent(mensaje)); //Funcion para enviar mensaje
        }
        else{ //movil URL y mensaje
            window.open("https://api.whatsapp.com/send?text=https://alura-crypter-challenge.netlify.app/   *mensaje encriptado*:" + encodeURIComponent(mensaje)); //Funcion para enviar mensaje
        }

    }
    else{
        if (e.target.classList.contains("shareW1")){
           window.open("https://web.whatsapp.com/send/?text=*mensaje encriptado*:" + encodeURIComponent(mensaje)); //Funcion para enviar mensaje
        }
        else{   // WEB URL y mensaje
            window.open("https://web.whatsapp.com/send/?text=https://alura-crypter-challenge.netlify.app/   *mensaje encriptado*:" + encodeURIComponent(mensaje)); //Funcion para enviar mensaje
        }

    }

}

function enviarTelegram(mensaje, e){
    if (detectar_movil()=="movil"){
        if (e.target.classList.contains("shareT1")){ // movil - mensaje solo
            window.open("tg:msg_url?url=**mensaje encriptado**:&text="+encodeURIComponent(mensaje));

        }
        else{ //movil URL y mensaje
            window.open("tg:msg_url?url=https://alura-crypter-challenge.netlify.app/&text="+encodeURIComponent(mensaje));     //Funcion para enviar mensaje

        }
    }
    else{ // web mensaje solo
        if (e.target.classList.contains("shareT1")){
            window.open("https://telegram.me/share/url?url=**mensaje encriptado**:&text="+encodeURIComponent(mensaje));

        }
        else{   // WEB URL y mensaje
            window.open("https://telegram.me/share/url?url=https://alura-crypter-challenge.netlify.app/&text=*mensaje encriptado*:"+encodeURIComponent(mensaje));

        }
    }

}

function detectar_movil(){
    let navegador = navigator.userAgent;
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            return("movil");
        } else {
            return("web");
        }
}       

    // La letra "a" es convertida para "ai"
    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"
    
