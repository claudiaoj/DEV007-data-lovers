import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';
//console.log(data.athletes);
import { filtrarAthlete } from "./data.js";

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


//Para mostrar en html la funcion mostrarAthletes.
document.addEventListener("DOMContentLoaded", () => {
mostrarAthletes(data.athletes);
})

function mostrarAthletes(athletes) {

    limpiarHTML(); // elimina el html previo


    athletes.slice(0,150).forEach( athlete  => {
        //const { name, gender, team, sport, medal } = athlete;
    resultado.innerHTML += `
    <div class="card-atleta" id="imagen">
        <img class="imagen-medalla" src="images/medallas.png" alt="medalla" >
        <h5>Nombre: ${athlete.name}</h5>
        <h5>Género: ${athlete.gender}</h5>
        <h5>País: ${athlete.team}</h5>
        <h5>Deporte: ${athlete.sport}</h5>
        <h5>Medalla: ${athlete.medal}</h5>
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

//EventListener para los select
team.addEventListener("change", e => {  //change es para cuando cambia el select
    //console.log(e.target.value);
    datosBusqueda.team = e.target.value; //sera igual al valor que les estamos asignando.
    //console.log(datosBusqueda);

    const resultado = filtrarAthlete(data.athletes, filtrarTeam, filtrarMedal, filtrarSport, filtrarGender);
    mostrarAthletes(resultado)
});


medal.addEventListener("change", e => {
    datosBusqueda.medal = e.target.value;
    const resultado = filtrarAthlete(data.athletes, filtrarTeam, filtrarMedal, filtrarSport, filtrarGender);
    mostrarAthletes(resultado)
});

sport.addEventListener("change", e => {
    datosBusqueda.sport = e.target.value;
    const resultado = filtrarAthlete(data.athletes, filtrarTeam, filtrarMedal, filtrarSport, filtrarGender);
    mostrarAthletes(resultado)
});

gender.addEventListener("change", e => {
    datosBusqueda.gender = e.target.value;
    const resultado = filtrarAthlete(data.athletes, filtrarTeam, filtrarMedal, filtrarSport, filtrarGender);
    mostrarAthletes(resultado)
});



//funcion que filtra en base a la busqueda 
/*function () {
    //funciona dentro de otra funcion (toma otra funcion como parametro)
    const resultado = data.athletes.filter(filtrarTeam).filter(filtrarMedal).filter(filtrarSport).filter(filtrarGender)
    //console.log(resultado);
    mostrarAthletes(resultado);
}*/

function filtrarTeam(athlete) {
    if (datosBusqueda.team) {
        return athlete.team === datosBusqueda.team;
    }
    return athlete;
}

function filtrarMedal(athlete) {
    const { medal } = datosBusqueda;
    if (medal) {
        return athlete.medal === medal;
    }
    return athlete;
}

function filtrarSport(athlete) {
    const { sport } = datosBusqueda;
    if (sport) {
        return athlete.sport === sport;
    }
    return athlete;
}

function filtrarGender(athlete) {
    const { gender } = datosBusqueda;
    if (gender) {
        return athlete.gender === gender;
    }
    return athlete;
}








//const arrayCountries = sortData(Array.from(allCountries(arrayAthletes))).reverse();//array de paises


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







