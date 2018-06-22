const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello Express!</h1>');
});

app.get('/about', (req, res) => {
    var about = {
        name: 'arpit',
        likes: ['blender', 'node']
    };
    res.send(about);
});
app.get('/bad', (req, res) => {
    var error = {
        errrorMessage: 'Unable to handle request'
    }
    res.send(error);
});

app.listen(3000);