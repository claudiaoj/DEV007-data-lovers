// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};


export function filtrarAthlete(data, team, medal, sport, gender) {
    //funciona dentro de otra funcion (toma otra funcion como parametro)
    const resultado = data.filter(team).filter(medal).filter(sport).filter(gender)
    //console.log(resultado);
  return resultado;
  
}












//Es un filtro general
//const functionAll = (array, condicion) => {
//  return array.filter(condicion);
//};

/* funcion para que no se repitan los  paises
const allCountries = (athletes) => {
  const newArrCountries = athletes.map(newTeam => {
    return newTeam.team
  });
  return new Set(newArrCountries);
}*/
