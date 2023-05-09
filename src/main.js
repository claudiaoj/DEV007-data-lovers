import { example } from './data.js';
import data from './data/athletes/athletes.js';
console.log(example, data);
console.log(data.athletes);

const atletas = data.athletes;
const contenedor = document.getElementById("contenedor");


atletas.slice(0,50).forEach(atleta => {
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



