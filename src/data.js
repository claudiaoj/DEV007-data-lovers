// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};


export function filtrarAthlete(data, team, medal, sport, gender) {
  let resultado = data
  if(team){
    resultado = resultado.filter(item => item.team === team);
  }
  if(medal){
    resultado = resultado.filter(item => item.medal === medal);
  }
  if(sport){
    resultado = resultado.filter(item => item.sport === sport);
  }
  if(gender){
    resultado = resultado.filter(item => item.gender === gender);
  }
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
