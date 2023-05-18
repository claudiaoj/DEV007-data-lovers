import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';
//console.log(data.athletes);
import { 
    filtrarAthlete,
    filtrarTeam,
    filtrarMedal,
    filtrarSport,
    filtrarGender,
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
  
  
    athletes.slice(0,150).forEach( athlete  => {
        //const { name, gender, team, sport, medal } = athlete;
        resultado.innerHTML += `
    
    <div class="flip-container">
        <div class="card-completa">
            <div class="front">
                <div class="card-atleta" id="imagen">
                    <img class="imagen-medalla" src="images/medallas.png" alt="medalla" >
                    <h5>${athlete.name}</h5>
                </div>
            </div>
            <div class="back">
                <div class="card-atleta" id="imagen">
                    <img class="imagen-medalla" src="images/medallas.png" alt="medalla" >
                    <h5>Nombre: ${athlete.name}</h5>
                    <h5>Género: ${athlete.gender}</h5>
                    <h5>País: ${athlete.team}</h5>
                    <h5>Deporte: ${athlete.sport}</h5>
                    <h5>Medalla: ${athlete.medal}</h5>
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
    const resultado = filtrarTeam(data.athletes, datosBusqueda.team);
    mostrarAthletes(resultado)
});

medal.addEventListener("change", e => {
    datosBusqueda.medal = e.target.value;
    const resultado = filtrarMedal(data.athletes, datosBusqueda.medal);
    mostrarAthletes(resultado)
});

sport.addEventListener("change", e => {
    datosBusqueda.sport = e.target.value;
    const resultado = filtrarSport(data.athletes, datosBusqueda.sport);
    mostrarAthletes(resultado)
});

gender.addEventListener("change", e => {
    datosBusqueda.gender = e.target.value;
    const resultado = filtrarGender(data.athletes, datosBusqueda.gender);
    mostrarAthletes(resultado)
});



//funcion que filtra en base a la busqueda 
/*function () {
    //funciona dentro de otra funcion (toma otra funcion como parametro)
    const resultado = data.athletes.filter(filtrarTeam).filter(filtrarMedal).filter(filtrarSport).filter(filtrarGender)
    //console.log(resultado);
    mostrarAthletes(resultado);
}*/



//Para que se actualice los datos de select
const refreshBoton = document.getElementById('refresh-boton');
refreshBoton.addEventListener('click', () => {
location.reload(); //método que actualiza la página actual.
});

//Orden de Atletas por nombre A-Z
/*const ordenSelect = document.getElementById("filtro-orden");
ordenSelect.addEventListener("change", () => {
    const ordenNombre = ordenSelect.value;
    const dataOrden = sort.(data.athletes, ordenNombre);
    console.log(dataOrden);
    mostrarAthletes(dataOrden);
} )*/





















/*Boton que nos deriva a página que contiene los deportes
document.getElementById("boton-deporte").addEventListener('click', () => {
    document.getElementById("inicio").style.display = 'none';
    document.getElementById("pagina-deporte").style.display = 'block';
});
/Boton que nos deriva a la pagina que contiene las estadisticas
document.getElementById("boton-estadistica").addEventListener("click", () => {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("stadistics").style.display = "block"; //pendiente
});*/







