const {MongoClient, ObjectID} = require('mongodb');

var databaseName = `TodoApp`;
const connectionString = `mongodb://localhost:27017/${databaseName}`;

MongoClient.connect(connectionString, (err, db) =>{
    if(err){
        return console.log(`Unable to connect to MongoDB server: ${connectionString}`);
    }
    
    console.log(`Connected to MongoDB server: ${connectionString} `);

    // db.collection('Users').find({name: 'Luca'}).count().then ((count)=>{
    //     console.log('Todos');
    //     console.log(`Count: ${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    //deleteMany
    //db.collection('Todos').deleteMany({message: 'Eat Lunch'}).then((res)=>{console.log(res);});

    //deleteOne
    //db.collection('Todos').deleteOne({message: 'Eat Lunch'}).then((res)=>{console.log(res);});

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: true}).then((res)=>{
    //     console.log(res);
    // });

    //findOneAndDelete - Exercize
    db.collection('Todos')
    .findOneAndDelete({_id: new ObjectID("59abc818290975f2a39b11ae")})
    .then((res)=>{
        console.log(JSON.stringify(res, undefined,2));
    });

    //db.close();

} );