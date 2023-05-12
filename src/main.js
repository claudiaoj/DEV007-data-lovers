import data from './data/athletes/athletes.js';
//console.log(data.athletes);
import { allCountries } from "./data.js";


const atletas = data.athletes;
const contenedor = document.getElementById("contenedor");

const arrayCountries = sortData(Array.from(allCountries(arrayAthletes))).reverse();//array de paises


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



atletas.slice(0,27).forEach(atleta => {
    contenedor.innerHTML += `
    <di class="card-atleta" id="imagen">
        <img class="imagen-medalla" src="images/medallas.png" alt="medalla" >
        <h5>Nombre: ${atleta.name}</h5>
        <h5>Género: ${atleta.gender}</h5>
        <h5>País: ${atleta.team}</h5>
        <h5>Deporte: ${atleta.sport}</h5>
        <h5>Medalla: ${atleta.medal}</h5>
    </div>
    `
    //console.log(atleta)
})













/*const nombreAtletas = data.athletes;
console.log(nombreAtletas);
for (let i = 0; i < nombreAtletas.length; i++){
    nombreAtletas[i].name
    console.log(nombreAtletas[i].name);
}*/






