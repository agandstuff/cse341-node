const express = require('express');

const app = express();

// app.use('/', (req, res, next) => {
//     console.log('testing');
//     next();
// });

// app.use('/', (req, res, next) => {
//     res.send('testing if this works');
// });

app.use('/users', (req, res, next) => {
    console.log('/users middleware');
    res.send('<p>The Middlware that handles just /users</p>');
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<p>The middleware that handles just /</p>');
});

app.listen(5000);