const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public'));
app.use('/static/js',express.static(path.join(__dirname, 'static/js')));
app.use('/static/css',express.static(path.join(__dirname, 'static/css')));
app.get('/', function(req, res) {
    res.render('index');
});

app.listen(24971);
