let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']
let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
let intentos = 6;
const INTENTAR = document.getElementById('intentar');
const COLUMNAS = document.getElementById('intentos');
const REINTENTAR = document.getElementById('reintentar');
const ERROR  = document.getElementById('error');
const FIN = document.getElementById('juegofin');
const INTREST =document.getElementById('intrest');
const GANADOR = document.getElementById('ganador');
let pganadora = document.getElementById('pganadora');
const endpoint="https://random-word-api.herokuapp.com/word?lang=es&&length=5"
fetch(endpoint).then((response)=>{
    response.json().then((data)=>{
        console.log(data[0]);palabra=(data[0].toUpperCase());})
});


//Boton
REINTENTAR.addEventListener('click',reintentar);

INTENTAR.addEventListener('click',juego);

//Funciones
function juego() {
   

   
    const input = document.getElementById('intento');
    const valor = input.value;
    const INTENTO = leerIntento();
    if(!INTENTO||INTENTO.length<5){;ERROR.style.display='block'; return}
    intentos--;
    COLUMNAS.style.display='block';

    ERROR.style.display='none';
        

if (intentos==0){
        terminar("<h1>PERDISTE 😿</h1>");pganadora.innerText="La palabra era: "+palabra;
   return }
   const ROW = document.createElement('div');
    ROW.className = 'row';

    function terminar(mensaje){
        FIN.style.display='block';
        GANADOR.innerHTML=INTENTO;
        const INPUT = document.getElementById("intento");
        INPUT.disabled = true;
        INTENTAR.disabled = true;
        let contenedor = document.getElementById('mensaje');
        contenedor.innerHTML = mensaje;
    }

    

for (let i in palabra){
    const SPAN = document.createElement('span');
        SPAN.className = 'letter';

    if(INTENTO[i]===palabra[i]){SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = '#00e676';}
    else if(palabra.includes(INTENTO[i])){
        SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#edef00';}
        else {SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#626262';}
            ROW.appendChild(SPAN)}
            if (INTENTO === palabra ) {
                terminar("<h1>GANASTE! 😺</h1>")
                }
COLUMNAS.appendChild(ROW)
if(intentos<=0){console.log("PERDISTE")}
    const INTREST = document.getElementById('intrest');
    INTREST.innerHTML="Intentos restantes: "+intentos;
}

function leerIntento(){
    let intento = document.getElementById('intento');
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;}    

function reintentar(){location.reload();}    