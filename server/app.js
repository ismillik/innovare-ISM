const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

//logging middleware
app.use(morgan('dev'));

//body parsing middleware
app.use(express.json());

//api routes
app.use('/api', require('./api'));

//main get route
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));

//static file serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })

module.exports = app;