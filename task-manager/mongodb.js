//CRUD create read update delete

/*const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;*/

const {MongoClient, ObjectId} = require('mongodb');

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
      });*/

    /*db.collection('tasks').insertMany([
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

    /* db.collection('users').updateOne({
         _id: new ObjectId('5cc15af2f5ad1a06e5e3280c')
     }, {
         $set: {
             name: "Shoxsanam"
         }
     }).then(result => {
         console.log(result)
     }).catch(error => {
         console.log(error)
     });*/

   /* db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })*/

   db.collection('tasks').deleteOne({
       description: "Make login page"
   }).then(result => {
       console.log(result)
   }).catch(error => {
       console.log(error)
   })
});