import { example } from './data.js';
import data from './data/athletes/athletes.js';
console.log(example, data);
console.log(data.athletes);

const atletas = data.athletes;
const contenedor = document.getElementById("contenedor");

atletas.forEach(atleta => {
    contenedor.innerHTML += `
    <h5>${atleta.name}<h5>
    `
    //console.log(atleta)
})



/*const nombreAtletas = data.athletes;
console.log(nombreAtletas);
for (let i = 0; i < nombreAtletas.length; i++){
    nombreAtletas[i].name
    console.log(nombreAtletas[i].name);
}*/



