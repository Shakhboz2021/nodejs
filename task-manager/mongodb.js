//CRUD create read update delete

//const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = require('mongodb');

const {MongoClient, ObjectID} = require('mongodb');


const connectionURL = 'mongodb://127.0.0.1/27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {'useNewUrlParser': true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to the database!')
    }

    console.log('Connected correctly!');
    const db = client.db(databaseName);

    /* db.collection('users').insertOne({
         name: 'Shakhboz',
         age: 25
     },(error, result) => {
         if (error) {
             return console.log('Unable to insert user')
         }
         console.log(result.ops)
     })*/

    /*db.collection('user').drop((error, result) => {
        if (error) {
            return console.log(error)
        }

        console.log("Collection successfully dropped")
    });*/
    /* db.collection('users').insertMany([
         {
             name: "Mirodil",
             age: 23
         }, {
             name: "Suxrob",
             age: 23
         }, {
             name: "Navruzbek",
             age: 22
         }
     ], (error, result) => {
         if (error) {
             return console.log(error)
         }

         console.log(result.ops)
     })*/

    /* db.collection('tasks').insertMany([
         {
             description: 'Make login page',
             completed: true
         }, {
             description: 'Make registration page',
             completed: false
         }, {
             description: 'Make forgot password page',
             completed: false
         }
     ], (error, result) => {
         if (error) {
             return console.log(error)
         }

         console.log(result.ops)
     })*/

    /*db.collection('users').findOne({
        name: "Mirodil"
    }, (error, user) => {
        if (error) {
            return console.log(error)
        }

        console.log(user)
    })*/

    /*db.collection('users').find({age: 23}).toArray((error, users) => {
        if (error) {
            return console.log(error)
        }
        console.log(users)
    });*/
    /* db.collection('users').find({age: 23}).count((error, userCount) => {
         if (error) {
             return console.log(error)
         }
         console.log(userCount)
     })*/

    /* db.collection('tasks').findOne({
         _id: new ObjectID('5cc00b38e262bb266c542b93')
     }, (error, task) => {
         if (error) {
             return console.log(error)
         }
         console.log(task)
     })*/

    db.collection('tasks').find({
        completed: false
    }).toArray((error, uncompletedTasks) => {
        if (error) {
            return console.log(error)
        }

        console.log(uncompletedTasks)
    })

});