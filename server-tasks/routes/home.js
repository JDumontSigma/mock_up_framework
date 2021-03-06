'use strict';

const express = require('express'),
      home = express.Router();

home.get('/', (req, res) => {
   res.render('index');
});
home.get('/index.html', (req, res) => {
      res.render('index');
});
home.get('/home.html', (req, res) => {
      res.render('home');
});
home.get('/prelim.html', (req, res) => {
      res.render('prelim');
});
home.get('./account.html', (req, res) => {
      res.render('account');
});
home.get('/manifest.html', (req, res) => {
      res.render('manifest');
});
home.get('/table.html', (req, res) => {
      res.render('table');
})
home.get('/study.html', (req, res) => {
      res.render('study');
});
home.get('/error', (req, res) => {
   res.render('error');
})

module.exports = home;