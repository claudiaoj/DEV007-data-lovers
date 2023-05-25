import { filtrarAthlete, sortData } from "../src/data.js";

//import data from "./data/athletes/athletes.js";



describe("filtrarAthlete", () => {
  it("Es una función", () => {
    expect(typeof filtrarAthlete).toBe("function");
  });
  
  it("retorna el atleta filtrado", () => {
    expect(filtrarAthlete(
      {
        "medal": "Silver",
        "sport": "Handball",
        "name": "Luc Abalo",
        "gender": "M",
        "team": "France",  
      }).toBe(
      {
        "medal": "Silver",
        "sport": "Handball",
        "name": "Luc Abalo",
        "gender": "M",
        "team": "France", 
      })
    )});
});

/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/


describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  it('retorna la data ordenada de manera ascendente', () => {
    expect(sortData('ascendente',[ 
      {
        "name": "Giovanni Abagnale",
      },
      {
        "name": "Patimat Abakarova",
      },
      {
        "name": "Luc Abalo",
      }])).toEqual([
      {
        "name": "Giovanni Abagnale",
      },
      {
        "name": "Luc Abalo",
      },
      {
        "name": "Patimat Abakarova",
      }
    ]);  
  });
  it('retorna la data ordenada de manera descendente', () => {
    expect(sortData('descendente',[ 
      {
        "name": "Giovanni Abagnale",
      },
      {
        "name": "Patimat Abakarova",
      },
      {
        "name": "Luc Abalo",
      }])).toEqual([
      {
        "name": "Patimat Abakarova",
      },
      {
        "name": "Luc Abalo",
      },
      {
        "name": "Giovanni Abagnale",
      },
    ]);  
  });
});