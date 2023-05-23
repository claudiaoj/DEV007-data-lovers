import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';
//console.log(data.athletes);

import { 
    filtrarAthlete,
    sortData
} from "./data.js";

//Variables a utilizar
const team = document.querySelector("#team");
const medal = document.querySelector("#medal");
const sport = document.querySelector("#sport");
const gender = document.querySelector("#gender");

const resultado = document.querySelector("#resultado");

//Generar un objeto con la busqueda, que guarde la seleccion del usuario
const datosBusqueda = { 
    gender: "",
    team: "",
    sport: "",
    medal: "",
}

function mostrarAthletes(athletes) {

    limpiarHTML(); // elimina el html previo

    athletes.slice(0, 160).forEach( athlete  => {
    const imgMedal = athlete.medal == 'Gold' ? "./images/gold.png" : athlete.medal == 'Silver' ? "./images/silver.png" : "./images/bronze.png" ;
        //const { name, gender, team, sport, medal } = athlete;
        resultado.innerHTML += `
    
    <div class="flip-container">
        <div class="card-completa">
            <div class="front">
                <div class="card-atleta" id="imagen">
                    <img class="imagen-medalla" src= ${imgMedal}>
                    <h4>${athlete.name}</h4>
                </div>
            </div>
            <div class="back">
                <div class="card-atleta" id="imagen">
                    <h3 class="nombre-atleta" >${athlete.name}</h3>
                    <h4>Team: ${athlete.team}</h4>
                    <h4>Medal: ${athlete.medal}</h4>
                    <h4>Sport: ${athlete.sport}</h4>
                    <h4>Gender: ${athlete.gender}</h4>
                </div>
            </div>
        </div>
    </div>
    `
    });


  //Limpiar html
    function limpiarHTML() {
        while (resultado.firstChild) {
            resultado.removeChild(resultado.firstChild);
        }
    }
}
//Para mostrar en html la funcion mostrarAthletes.
document.addEventListener("DOMContentLoaded", () => {
    mostrarAthletes(data.athletes);

})

//EventListener para los select
team.addEventListener("change", e => {  
    datosBusqueda.team = e.target.value;
    const resultado = filtrarAthlete(data.athletes, datosBusqueda.team, datosBusqueda.medal, datosBusqueda.sport, datosBusqueda.gender);
    mostrarAthletes(resultado)
});

medal.addEventListener("change", e => {
    datosBusqueda.medal = e.target.value;
    const resultado = filtrarAthlete(data.athletes, datosBusqueda.team, datosBusqueda.medal, datosBusqueda.sport, datosBusqueda.gender);
    mostrarAthletes(resultado)
});

sport.addEventListener("change", e => {
    datosBusqueda.sport = e.target.value;
    const resultado = filtrarAthlete(data.athletes, datosBusqueda.team, datosBusqueda.medal, datosBusqueda.sport, datosBusqueda.gender);
    mostrarAthletes(resultado)
});

gender.addEventListener("change", e => {
    datosBusqueda.gender = e.target.value;
    const resultado = filtrarAthlete(data.athletes, datosBusqueda.team, datosBusqueda.medal, datosBusqueda.sport, datosBusqueda.gender);
    mostrarAthletes(resultado);
});


//Actualizar los datos de select
const refreshBoton = document.getElementById("refresh-boton");
refreshBoton.addEventListener("click", () => {
location.reload(); //método que actualiza la página actual.
});

//Actualizar con el titulo 
const refreshTitle = document.getElementById("title-refresh");
refreshTitle.addEventListener("click", () => {
location.reload(); //método que actualiza la página actual.
});



//Orden A-Z
const ordenSelect = document.getElementById("filtro-orden");
ordenSelect.addEventListener("change", () => {
const ordenNombre = ordenSelect.value;
let dataOrden;

if (ordenNombre === "ascendente") {
    dataOrden = sortData("ascendente", data.athletes);
} else if (ordenNombre === "descendente") {
    dataOrden = sortData("descendente", data.athletes);
}

console.log(dataOrden);
mostrarAthletes(dataOrden);
});



//Prueba para realizar ventana modal de graficos
/*const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");


open.addEventListener("click", () => {
    modal_container.classList.add("show");  
    
});

close.addEventListener("click", () => {
modal_container.classList.remove("show");
});*/






