var dogsList = require("./dogs.js");
var express = require('express');
var bodyParser = require('body-parser');

var cors = require('cors');
var app = express();
//Instantiate express, cors, body-parser.json , body-parser.urlencoded, and set up express.static to run your public folder
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));



app.listen(8000, function() {
    console.log("listening to 8000");
});
app.get("/dogs", function(req, res) {
    res.send(dogsList);
});
app.post('/dogs', function(req, res) {
    req.body.key = dogsList[dogsList.length - 1].key + 1;
    dogsList.push(req.body);
    res.send(dogsList);
    
});

app.put('/dogs/:id', function(req, res) {
        for (var i = 0; i < dogsList.length; i++) {
            if (dogsList[i].key == req.params.id) {
                dogsList[i] = req.body;
            }
        }
        res.send(dogsList);
    })
    //deletes and pushes
app.delete('/dogs/:id', function(req, res) {
    for (var i = 0; i < dogsList.length; i++) {
        if (dogsList[i].key == req.params.id) {
            dogsList.splice(i, 1);
        }
    }
    res.send(dogsList);
});
//apt get request
