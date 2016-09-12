'use strict'
const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: 'Welcome', header2: 'Welcome To Wachs Tech Blog'})
})

module.exports = router
