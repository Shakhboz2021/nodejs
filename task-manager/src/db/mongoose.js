const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

//creating model

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        validate(value) {
            if (value.includes('password')) {
                throw new Error('Your password must not include the string "password"')
            }
        }
    }
});

/*const me = new User({
    name: '  Mirodil       ',
    email: 'Mirodil@gmail.com',
    password: 'Pd123'
});

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log(error)
});*/

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const firstTask = new Task({
    description: '       Create Monitoring page        '
});

firstTask.save().then(() => {
    console.log(firstTask)
}).catch((error) => {
    console.log(error)
});




