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



