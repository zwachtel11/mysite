'use strict'
const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('fun', {title: 'fun', header1: 'Fun...?', header2: 'will this work? I wonder'})
})

module.exports = router
