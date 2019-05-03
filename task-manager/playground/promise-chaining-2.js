require('../src/db/mongoose');
const Task = require('../src/models/task');


/*
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
*/

const deleteTaskAndCount = async (id, completed) => {
    await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments(completed);
    return count
};

deleteTaskAndCount('5ccbd04a4c24e50e3413de27', false).then(count => {
    console.log(count)
}).catch(error => {
    console.log(error)
});