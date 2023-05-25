import { filtrarAthlete, sortData } from "../src/data.js";

import data from "./data/athletes/athletes.js";

const dataTest = [
  {
    name: "Giovanni Abagnale",
    gender: "M",
    sport: "Rowing",
    team: "Italy",
    medal: "Bronze",
  },
  {
    name: "Patimat Abakarova",
    gender: "F",
    sport: "Taekwondo",
    team: "Azerbaijan",
    medal: "Bronze",
  },
  {
    name: "Luc Abalo",
    gender: "M",
    sport: "Handball",
    team: "France",
    medal: "Silver",
  },
];

describe("filtrarAthlete", () => {
  it("Es una función", () => {
    expect(typeof filtrarAthlete).toBe("function");
  });

  it("returns `filtrarAthete`", () => {
    expect(
      filtrarAthlete([
        {
          name: "Giovanni Abagnale",
          gender: "M",
          sport: "Rowing",
          team: "Italy",
          medal: "Bronze",
        },
        {
          name: "Patimat Abakarova",
          gender: "F",
          sport: "Taekwondo",
          team: "Azerbaijan",
          medal: "Bronze",
        },
        {
          name: "Luc Abalo",
          gender: "M",
          sport: "Handball",
          team: "France",
          medal: "Silver",
        },
        {
          name: "Denis Mikhaylovich Ablyazin",
          gender: "M",
          sport: "Gymnastics",
          team: "Russia",
          medal: "Silver",
        },
        {
          name: 'Matthew "Matt" Abood',
          gender: "M",
          sport: "Swimming",
          team: "Australia",
          medal: "Bronze",
        },
        {
          name: 'Alejandro "lex" Abrines Redondo',
          gender: "M",
          sport: "Basketball",
          team: "Spain",
          medal: "Bronze",
        },
      ])
    ).toBe("filtrarAthlete");
  });
});

/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/

describe("sortData", () => {
  it("Deberia ser una función", () => {
    expect(typeof sortData).toBe("function");
  });

  it("Primer nombre de la data con orden A-Z es Giovanni Abagnale", () => {
    expect(sortData(dataTest, "ascendente")[0].name).toEqual(
      "Giovanni Abagnale"
    ); //toEqual si es igual
  });

  it("Primer nombre de la data con orden Z-A es Patimat Abakarova", () => {
    expect(sortData(dataTest, "descendente")[0].name).toEqual(
      "Patimat Abakarova"
    ); //toEqual si es igual
  });
});


describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns `sortData`', () => {
    expect(sortData([ 
      {
    name: "Giovanni Abagnale",
  },
  {
    name: "Patimat Abakarova",
  },
  {
    name: "Luc Abalo",
      }], 'ascendente')).toEqual([
        {
    name: "Giovanni Abagnale",
  },
        {
    name: "Luc Abalo",
  
  },
  {
    name: "Patimat Abakarova",
      }
        
      ]);
  });
