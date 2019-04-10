const fs = require('fs');

// const myTeacher = {
//     name: "Andrew",
//     planet: "Earth",
//     age: 27
// };
// const teacher  = JSON.stringify(myTeacher);
const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer); // bring buffered data from file

const stringData = dataBuffer.toString();
const parsedData = JSON.parse(stringData);
parsedData.name = 'Shakhboz';
parsedData.age = 25;
console.log(parsedData);
stringValue = JSON.stringify(parsedData);
fs.writeFileSync('1-json.json', stringValue);
