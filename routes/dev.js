'use strict'

const router = require('express').router

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('made it')
})

module.exports = router
