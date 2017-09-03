var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) =>{
    console.log(req.body);
    var todo = new Todo({
        message: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.send(e);
    });

});

app.listen(3000,() =>{
    console.log('Server up on localhost:3000');
});
