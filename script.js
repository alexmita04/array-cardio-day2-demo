const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

let comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const somePeople = people.some((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});

console.log("Is at least one person 19 or older?");
console.log(somePeople);

// Array.prototype.every() // is everyone 19 or older?
const everyPeople = people.every((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});

console.log("Is everyone 19 or older?");
console.log(everyPeople);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const specificComment = comments.find((comment) => comment.id === 823423);

console.log("The comment with id 823423");
console.log(specificComment);

// Array.prototype.findIndex()
// Find the comment with this ID
const indexSpecificComment = comments.findIndex(
  (comment) => comment.id === 823423
);

console.log("The index of the comment with the id 823423:");
console.log(indexSpecificComment);

// delete the comment with the ID of 823423
// comments.splice(indexSpecificComment, 1);

// console.log("Comments without the comment with id 823423");
// console.table(comments);

const comments2 = [
  ...comments.slice(0, indexSpecificComment),
  ...comments.slice(indexSpecificComment + 1),
];

console.log("Comments without the comment with id 823423");
console.table(comments2);
