var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function(req, res) {
	res.render('fondation');
});

app.use(express.static('public'));

app.get('/foyeryolandelafue', function(req, res) {
	res.render('foyer');
});

var server = app.listen(5000);