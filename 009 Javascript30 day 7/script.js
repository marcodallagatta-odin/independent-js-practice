// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const currentYear = (new Date().getFullYear());
const some = people.some(x => {
    return ((currentYear - x.year) >= 19);
});
console.log(some);
// Array.prototype.every() // is everyone 19 or older?
const every = people.every(x => {
    return ((currentYear - x.year) >= 19);
});
console.log(every);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const find = comments.find(x => x.id === 823423);
console.log(find);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const findInd = comments.findIndex(x => x.id === 823423);
// opt 1; create new array with the index removed
const newComments = [
    ...comments.slice(0, findInd),
    ...comments.slice(findInd+1)
];
// opt 2: edit existing array
comments.splice(findInd, 1);
console.table(comments);
console.table(newComments);