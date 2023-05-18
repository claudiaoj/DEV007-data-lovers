// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};



export function filtrarAthlete(data, team, medal, sport, gender) {
   const resultado = data.filter(team).filter(medal).filter(sport).filter(gender)
  return resultado;
}

export function filtrarTeam(data, team) {
   const resultado = data.filter(item => item.team === team);
  return resultado;
}

export function filtrarMedal(data, medal) {
   const resultado = data.filter(item => item.medal === medal);
  return resultado;
}

export function filtrarSport(data, sport) {
   const resultado = data.filter(item => item.sport === sport);
  return resultado;
}

export function filtrarGender(data, gender) {
   const resultado = data.filter(item => item.gender === gender);
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
