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


//Orden A-Z
export function sortData(order, data) {
  let dataOrden;

  if (order === "ascendente") {
    dataOrden = data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  } else if (order === "descendente") {
    dataOrden = data.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
  }

  return dataOrden;
}



