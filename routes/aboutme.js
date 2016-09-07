'use strict'
const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('aboutme', {
    title: 'aboutme',
    header1: 'About me',
    header2: 'Bio:'
  })
})

module.exports = router
