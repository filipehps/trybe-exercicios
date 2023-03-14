// Fonte: <https://restcountries.com/v2/all>
const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230,
  },
  {
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580,
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748,
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741,
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199,
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468,
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700,
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91,
  },
];
// console.log(
//   countries.reduce((a, b) => ({ population: a.population + b.population }), {
//     population: 0,
//   })
// );

// const area = (a, b) => ({ area: a.area + b.area });
// console.log(
//   countries.reduce(area, {
//     area: 0,
//   })
// );
// const maiorNome = (a, b) => (a.name.length > b.name.length && a) || b;
// console.log(countries.reduce(maiorNome));

// const names = [
//   'Aanemarie',
//   'Adervandes',
//   'Akifusa',
//   'Abegildo',
//   'Adicellia',
//   'Aladonata',
//   'Abeladerco',
//   'Adieidy',
//   'Alarucha',
// ];
// const expectedResult = 20;
// const countA = () => {
//   // retorne seu código aqui
// };

// let contador = 0;
// console.log(
//   names
//     .reduce((a, b) => a.concat(b))
//     .split('')
//     .map((letra) => {
//       if (letra === 'a' || letra === 'A') contador += 1;
//       return contador;
//     })
// );

// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];
// const expectedResult = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];
const studentAverage = () => {
  // retorne seu código aqui
  return grades.map((element, i) => {
    return {
      name: students[i],
      avarage: element.reduce((a, b) => a + b) / grades[i].length,
    };
  });
};
console.log(studentAverage());
