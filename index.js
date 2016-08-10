'use strict'

const express = require('express')
const stylus = require('stylus')
const nib = require('nib')
const MongoClient = require('mongodb').MongoClient
const config = require('./configuration')

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

const index = function(req, res) {
  res.render('index', {
    title: 'Coming Soon'
  })
}

app.get('/', index)
app.get('/upNext', 'Hello')
app.listen(config.port)
