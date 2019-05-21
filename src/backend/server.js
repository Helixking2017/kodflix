const express = require('express');
const app = express();
const port = 3001;
const shows = require('./ListOfShows')

app.get('/', (req, res) => res.send('Hello World!')); //route handler
app.get('/rest/shows', (req, res) => res.send(shows()));

//app.get('', (req, res) => res.send('this is a list of shows'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));