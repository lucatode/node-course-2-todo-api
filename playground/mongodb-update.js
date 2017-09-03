const {MongoClient, ObjectID} = require('mongodb');

var databaseName = `TodoApp`;
const connectionString = `mongodb://localhost:27017/${databaseName}`;

MongoClient.connect(connectionString, (err, db) =>{
    if(err){
        return console.log(`Unable to connect to MongoDB server: ${connectionString}`);
    }
    
    console.log(`Connected to MongoDB server: ${connectionString} `);

    db.collection('Users').findOneAndUpdate({
        name: "Admin-Luca"
    },{
        $set:{
            name: "Admin-Luca"
        }, 
        $inc:{
            age: 1
        }
    },{
        returnOriginal: false
    }).then((res)=>{
        console.log(res);
    });

    //db.close();

} );