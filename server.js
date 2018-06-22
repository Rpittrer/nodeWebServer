const express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('hello world');
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

app.listen(3000, () => {
    console.log("Server is up on port 3000");
});