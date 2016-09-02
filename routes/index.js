'use strict'
const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: 'Welcome', header1: 'Welcome'})
})

module.exports = router
