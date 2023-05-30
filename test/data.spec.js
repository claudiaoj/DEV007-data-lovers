//Importamos las funciones a testear desde data.js
import { filtrarAthlete, sortData } from "../src/data.js";

//Testeamos la función filtrar por atleta
describe("filtrarAthlete", () => {
  it("Es una función", () => {
    expect(typeof filtrarAthlete).toBe("function");
  });

  it("retorna el atleta filtrado", () => {
    expect(
      filtrarAthlete({
        medal: "Silver",
        sport: "Handball",
        name: "Luc Abalo",
        gender: "M",
        team: "France",
      })
    ).toEqual({
      medal: "Silver",
      sport: "Handball",
      name: "Luc Abalo",
      gender: "M",
      team: "France",
    });
  });
});


//Generamos una constante con algunos de los tletas para testear la función filtrar por País, medalla, deporte y género
const testData = [
  {
    name: "Oleg Antonov",
    team: "Italy",
    medal: "Silver",
    sport: "Volleyball",
    gender: "M",
  },
  {
    name: "William Peixoto Arjona",
    team: "Brazil",
    medal: "Gold",
    sport: "Volleyball",
    gender: "M",
  },
  {
    name: "Daniel Akpeyi",
    team: "Nigeria",
    medal: "Bronze",
    sport: "Football",
    gender: "M",
  },
  {
    name: "Stanley Amuzie",
    team: "Nigeria",
    medal: "Bronze",
    sport: "Football",
    gender: "M",
  },
];

describe("Testeando filterAthlete", () => {
  it("Deberían ser 4 atletas", () => {
    expect(filtrarAthlete(testData)).toHaveLength(4); //comprobar que un objeto tiene una  propiedad .length y está configurado en un determinado valor numérico.
  });
  it("Filtra por pais", () => {
    expect(filtrarAthlete(testData, "Nigeria")).toEqual([
      {
        name: "Daniel Akpeyi",
        team: "Nigeria",
        medal: "Bronze",
        sport: "Football",
        gender: "M",
      },
      {
        name: "Stanley Amuzie",
        team: "Nigeria",
        medal: "Bronze",
        sport: "Football",
        gender: "M",
      },
    ]);
  });

  it("Filtra por medalla", () => {
    expect(filtrarAthlete(testData, null, "Gold")).toEqual([
      {
        name: "William Peixoto Arjona",
        team: "Brazil",
        medal: "Gold",
        sport: "Volleyball",
        gender: "M",
      },
    ]);
  });
  it("Filtra por deporte", () => {
    expect(filtrarAthlete(testData, null, null, "Volleyball")).toEqual([
      {
        name: "Oleg Antonov",
        team: "Italy",
        medal: "Silver",
        sport: "Volleyball",
        gender: "M",
      },
      {
        name: "William Peixoto Arjona",
        team: "Brazil",
        medal: "Gold",
        sport: "Volleyball",
        gender: "M",
      },
    ]);
  });

  it("Filtra por género", () => {
    expect(filtrarAthlete(testData, null, null, null, "M")).toEqual([
      {
        name: "Oleg Antonov",
        team: "Italy",
        medal: "Silver",
        sport: "Volleyball",
        gender: "M",
      },
      {
        name: "William Peixoto Arjona",
        team: "Brazil",
        medal: "Gold",
        sport: "Volleyball",
        gender: "M",
      },
      {
        name: "Daniel Akpeyi",
        team: "Nigeria",
        medal: "Bronze",
        sport: "Football",
        gender: "M",
      },
      {
        name: "Stanley Amuzie",
        team: "Nigeria",
        medal: "Bronze",
        sport: "Football",
        gender: "M",
      },
    ]);
  });
});

//Testeamos la función ordenar de manera ascendente y descendente con algunos nombres de atletas
describe("sortData", () => {
  it("Es una function", () => {
    expect(typeof sortData).toBe("function");
  });
  it("retorna la data ordenada de manera ascendente", () => {
    expect(
      sortData("ascendente", [
        {
          name: "Giovanni Abagnale",
        },
        {
          name: "Patimat Abakarova",
        },
        {
          name: "Luc Abalo",
        },
      ])
    ).toEqual([
      {
        name: "Giovanni Abagnale",
      },
      {
        name: "Luc Abalo",
      },
      {
        name: "Patimat Abakarova",
      },
    ]);
  });
  it("retorna la data ordenada de manera descendente", () => {
    expect(
      sortData("descendente", [
        {
          name: "Giovanni Abagnale",
        },
        {
          name: "Patimat Abakarova",
        },
        {
          name: "Luc Abalo",
        },
      ])
    ).toEqual([
      {
        name: "Patimat Abakarova",
      },
      {
        name: "Luc Abalo",
      },
      {
        name: "Giovanni Abagnale",
      },
    ]);
  });
});
