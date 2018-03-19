const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('views'));
app.get('*', function(req, res) {
    res.render('index');
});

app.listen(24971);
