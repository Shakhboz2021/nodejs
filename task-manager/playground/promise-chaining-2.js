require('../src/db/mongoose');
const Task = require('../src/models/task');


Task.findByIdAndDelete('5ccacdc2f4e6f23eaced9a0f').then(task => {
    console.log(task);
    return Task.countDocuments({
        completed: false
    })
}).then(countedTasks => {
    console.log(countedTasks)
}).catch(error => {
    console.log(error)
});