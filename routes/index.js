'use strict'
const router = require('express').router

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: 'Express'})
})

module.exports = router
