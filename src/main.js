import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';
//console.log(data.athletes);
//import { allCountries } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
mostrarAthletes(data.athletes);
})

function mostrarAthletes(athletes) {

    limpiarHTML(); // elimina el html previo


    athletes.forEach( athlete  => {
        //const { name, gender, team, sport, medal } = athlete;

        const athleteHTML = document.createElement("p");
        athleteHTML.textContent = `
            Nombre: ${athlete.name} - Genero: ${athlete.gender} - Pais: ${athlete.team} - Deporte: ${athlete.sport} -
            Medalla:  ${athlete.medal}

    `;
      //insertar en el html
        resultado.appendChild(athleteHTML)

    });



/*atletas.slice(0,300).forEach(atleta => {
    contenedor.innerHTML += `
    <div class="card-atleta" id="imagen">
        <img class="imagen-medalla" src="images/medallas.png" alt="medalla" >
        <h5>Nombre: ${atleta.name}</h5>
        <h5>Género: ${atleta.gender}</h5>
        <h5>País: ${atleta.team}</h5>
        <h5>Deporte: ${atleta.sport}</h5>
        <h5>Medalla: ${atleta.medal}</h5>
    </div>
    `
    //console.log(atleta)
})*/


//Limpiar html
    function limpiarHTML() {
        while (resultado.firstChild) {
            resultado.removeChild(resultado.firstChild);
        }
    }
}


//Variables
const contenedor = document.querySelector("#resultado");

const team = document.querySelector("#team");
const medal = document.querySelector("#medal");
const sport = document.querySelector("#sport");
const gender = document.querySelector("#gender");
const name = document.querySelector("#name"); //orden por nombre


//Generar un objeto con la busqueda
const datosBusqueda = {
    name: "", 
    gender: "",
    team: "",
    sport: "",
    medal: "",
    
}

//EventListener para los select
team.addEventListener("change", e => {  //change es para cuando cambia el select
    //console.log(e.target.value);
    datosBusqueda.team = e.target.value; //sera igual al valor que les estamos asignando.
    console.log(datosBusqueda);

    filtrarAthlete();
})

medal.addEventListener("change", e => {
    datosBusqueda.medal = e.target.value;
    filtrarAthlete();
})

sport.addEventListener("change", e => {
    datosBusqueda.sport = e.target.value;
    filtrarAthlete();
})

gender.addEventListener("change", e => {
    datosBusqueda.gender = e.target.value;
    filtrarAthlete();
})

name.addEventListener("change", e => {
    datosBusqueda.name = e.target.value;
} )


//funcion que filtra en base a la busqueda
function filtrarAthlete() {
    const resultado = data.athletes.filter(filtrarTeam).filter(filtrarMedal).filter(filtrarSport).filter(filtrarGender)
    //console.log(resultado);
    mostrarAthletes(resultado)
}

function filtrarTeam(athlete) {
    const { team } = datosBusqueda;
    if (team) {
        return athlete.team === team;
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







