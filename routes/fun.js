'use strict'
const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('fun', {title: 'fun', header1: 'Fun...?'})
})

module.exports = router
