import { filtrarAthlete, sortData } from "../src/data.js";
//import athletes from "../src/data/athletes/athletes.js";

//import data from "./data/athletes/athletes.js";

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
