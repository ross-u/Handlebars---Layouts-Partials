const express = require('express');
const hbs = require('hbs');
const app = express();
const PORT = 3001;
const players = require('./playersData');


// SET THE TEMPLATE ENGINE
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));




// ROUTES
app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/teams', (req, res, next) => {
  res.render('teams');
});

app.get('/players', (req, res, next) => {
  res.render('players', data );
});

// START THE SERVER
app.listen(PORT, () => console.log(`Server listening on a PORT ${PORT}`));