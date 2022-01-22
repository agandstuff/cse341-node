const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res, next) => {
    res.render('home', { pageTitle: 'Add User' });
  });
  
  app.get('/users', (req, res, next) => {
    res.render('users', {
      pageTitle: 'User',
      users: users,
      hasUsers: users.length > 0
    });
  });
  
  app.post('/user', (req, res, next) => {
    users.push({ name: req.body.username });
    res.redirect('/users');
  });

app.listen(3000);