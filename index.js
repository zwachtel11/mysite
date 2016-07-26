'use strict'

const express = require('express')
const config = require('./configuration')

const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

const index = function(req, res) {
  res.send('4dbz in a cadilac: Coming Soon...!')
}

app.get('/', index)

app.listen(config.port)
