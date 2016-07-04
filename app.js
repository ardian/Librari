var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

var bookRouter = express.Router();

// app.use is prior to app.get
app.use(express.static('public'));
app.set('views', ('./src/views'));

// If we want to use handlebars
// var handlebars = require('express-handlebars');
// app.engine('.hbs', handlebars({extname: '.hbs'}));

app.set('view engine', 'ejs');

bookRouter.route('/')
    .get(function(req, res) {
        res.send('Hello Books');
    });

bookRouter.route('/single')
    .get(function(req, res) {
        res.send('Hello Single Book');
    });

// Everything that uses bookRouter will work under /Books
app.use('/Books', bookRouter);

app.get('/', function (req, res) {
    res.render('index', { title: 'Hello from render', nav: [{ Link: '/Books', Text: 'Books'}, { Link: '/Authors', Text: 'Authors' }]});
});

app.get('/books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);

});
