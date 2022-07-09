// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const born1500s = inventors.filter((inv) => {
  if (inv.year >= 1500 && inv.year < 1600) {
    return true;
  }
});
// console.log(born1500s);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const firstLast = inventors.map((inventor) => {
  return `${inventor.first} ${inventor.last}`;
});
// console.log(firstLast);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortByBirth = inventors.sort((prev, next) => {
  return prev.year > next.year ? 1 : -1;
});
// console.log(sortByBirth);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const lifeSum = inventors.reduce((tot, curr) => {
  return tot + (curr.passed - curr.year);
}, 0);
// console.log(lifeSum);

// 5. Sort the inventors by years lived
const lengthSort = inventors.sort((prev, next) => {
  if (prev.passed - prev.year > next.passed - next.year) {
    return 1;
  } else {
    return -1;
  }
});
// console.log(lengthSort);

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// 6. sort Exercise
// Sort the people alphabetically by last name
const sortedPeople = people.sort((p, n) => {
  const [pLast, pFirst] = p.split(", ");
  const [nLast, nFirst] = n.split(", ");
  return pLast > nLast ? 1 : -1;
});
// console.log(sortedPeople);

// 7. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
const dataSum = data.reduce((tot, cur) => {
  if (!tot[cur]) tot[cur] = 0;
  tot[cur]++;
  return tot;
}, {});
// console.log(dataSum);
