const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use('/js',express.static(path.join(__dirname, 'public/js')));
app.use('/css',express.static(path.join(__dirname, 'public/css')));
app.get('/', function(req, res) {
    res.render('index');
});

app.listen(24971);
