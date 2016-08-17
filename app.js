'use strict'

const express = require('express')
const stylus = require('stylus')
const nib = require('nib')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fun = require('./routes/dev')
const routes = require('./routes/index')

const app = express()

const compile = function(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.set('views', './views')
app.set('view engine', 'pug')
app.use(stylus.middleware({
  src: './public',
  compile: compile
}))

app.use(express.static('./public'))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)
app.use('/fun', fun)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')

  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})
module.exports = app
