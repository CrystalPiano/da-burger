var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();
var db = require('../models');

router.get("/api/burger/", function(req, res) {
    db.Burger.findAll({})
    .then(function(dbBurgers) {
        console.log(dbBurger);
      //res.json(dbBurgers);
    });
  });

module.exports = router;