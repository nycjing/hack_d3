'use strict';
var express = require('express');
var app = express();
// var router = require('./routes');
var morgan = require('morgan');
var nunjucks = require('nunjucks');
// var bodyParser = require('body-parser');
var path = require('path');
// var models = require('./models');

// templating boilerplate setup
app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
var env = nunjucks.configure('views', {noCache: true}); // where to find the views, caching off

// // and then include these two lines of code to add the extension:
// var AutoEscapeExtension = require("nunjucks-autoescape")(nunjucks);
// env.addExtension('AutoEscapeExtension', new AutoEscapeExtension(env));

// logging middleware
app.use(morgan('dev'));


app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules/d3/build')));
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/treemap', function (req, res) {
    res.render('treemap');
});

var server = app.listen(3000, function () {
    console.log('Server is listening on port 3000!');
});
