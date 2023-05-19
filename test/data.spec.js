import { filtrarAthlete, sortData } from '../src/data.js';


describe('filtrarAthlete', () => {
  it('is a function', () => {
    expect(typeof filtrarAthlete).toBe('function');
  });

  it('returns `filtrarAthete`', () => {
    expect(filtrarAthlete([
      {
        "name": "Giovanni Abagnale",
        "gender": "M",
        "sport": "Rowing",
        "team": "Italy",
        "medal": "Bronze"
      },
      {
        "name": "Patimat Abakarova",
        "gender": "F",
        "sport": "Taekwondo",
        "team": "Azerbaijan",
        "medal": "Bronze"
      },
      {
        "name": "Luc Abalo",
        "gender": "M",
        "sport": "Handball",
        "team": "France",
        "medal": "Silver"
      },
      {
        "name": "Denis Mikhaylovich Ablyazin",
        "gender": "M",
        "sport": "Gymnastics",
        "team": "Russia",
        "medal": "Silver"
      },
      {
        "name": "Matthew \"Matt\" Abood",
        "gender": "M",
        "sport": "Swimming",
        "team": "Australia",
        "medal": "Bronze"
      },
      {
        "name": "Alejandro \"lex\" Abrines Redondo",
        "gender": "M",
        "sport": "Basketball",
        "team": "Spain",
        "medal": "Bronze"
      },  
    ])).toBe('filtrarAthlete');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
