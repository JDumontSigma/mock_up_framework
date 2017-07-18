'use strict';

const express = require('express'),
      app = express(),
      port = process.env.PORT || 8000;

const path = require('path'),
      logger = require('morgan'),
      bodyParse = require('body-parser'),
      compression = require('compression'),
      cons = require('consolidate');

const homeRoute = require('./server-tasks/routes/home'),
      errorRoute = require('./server-tasks/routes/error');

app.use(express.static('src'));

//set the view engine to html
app.engine('html', cons.swig);
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'html');
app.use(errorRoute.logError);
app.use(errorRoute.client);


app.use(homeRoute);

app.use(errorRoute.notFound);
app.use(errorRoute.errorHandler);


app.listen(port, () => {
   console.log('Server is up and running');
});