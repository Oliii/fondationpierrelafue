var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/fondation', function(req, res) {
	res.render('fondation');
});

app.get('/foyeryolandelafue', function(req, res) {
	res.render('foyer');
});

app.get('/', function(req, res) {
	res.render('presentation');
});

app.use(express.static('public'));


var port = process.env.PORT || 5000;
var server = app.listen(port);