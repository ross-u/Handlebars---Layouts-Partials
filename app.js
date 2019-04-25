const express = require('express');
const hbs = require('hbs');
const app = express();
const PORT = 3000;
const players = require('./playersData');


// SET THE TEMPLATE ENGINE
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// SET THE STATIC FOLDER FOR PUBLIC FILES
app.use(express.static(__dirname + '/public'));


// REGISTER THE PARTIAL 
hbs.registerPartials(__dirname + '/views/partials');


// ROUTES
app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/teams', (req, res, next) => {
  res.render('teams');
});

app.get('/players', (req, res, next) => {
const data = {
  players: players,
}
  res.render('players', data );
});

// START THE SERVER
app.listen(PORT, () => console.log(`Server listening on a PORT ${PORT}`));