import { example } from './data.js';
import data from './data/athletes/athletes.js';
console.log(example, data);
console.log(data.athletes);


const nombreAtletas = data.athletes;
console.log(nombreAtletas);
for (let i = 0; i < nombreAtletas.length; i++){
    nombreAtletas[i].name
    console.log(nombreAtletas[i].name);
}



