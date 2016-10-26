var express = require('express');

var app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/signup', function (req, res) {
  res.render('index');
});

app.get('/signin', function (req, res) {
  res.render('index');
});

app.listen(3000, function (err) {
  if(err){
    return console.log('error :P', process.exit(1));
  }
  console.log('listening port 3000');
});
