'use strict';

const express = require('express'),
      home = express.Router();

home.get('/', (req, res) => {
   res.render('index');
});
home.get('/error', (req, res) => {
   res.render('error');
})

module.exports = home;