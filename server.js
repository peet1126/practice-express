const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('<h1>sup dude</h1>');
});


app.get('/fruits', function(req, res) {
    res.send(Fruits);
});

const Fruits = ['apple', 'banana', 'mango', 'charry', 'pear'];

app.listen(3000, () => {
    console.log('party');
})