const fs = require('fs');

const myTeacher = {
        name: "Andrew",
        planet: "Earth",
        age: 27
    };
const teacher  = JSON.stringify(myTeacher);
fs.writeFileSync('1-json.json', teacher);

