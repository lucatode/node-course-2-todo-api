const {MongoClient, ObjectID} = require('mongodb');

var databaseName = `TodoApp`;
const connectionString = `mongodb://localhost:27017/${databaseName}`;

MongoClient.connect(connectionString, (err, db) =>{
    if(err){
        return console.log(`Unable to connect to MongoDB server: ${connectionString}`);
    }
    
    console.log(`Connected to MongoDB server: ${connectionString} `);

    // db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find({_id: new ObjectID('59ab3571290975f2a39ae574')}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Luca'}).count().then ((count)=>{
        console.log('Todos');
        console.log(`Count: ${count}`);
    },(err)=>{
        console.log('Unable to fetch todos', err);
    });


    //db.close();

} );