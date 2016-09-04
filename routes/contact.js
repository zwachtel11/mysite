'use strict'
const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('contact', {title: 'contact', header1: 'Contact Me'})
})

module.exports = router
