//index.js for api route

//require express
var express = require('express');
var router = express.Router();
var productCtrl = require('../controllers/product');
router.get('/product',productCtrl.getProduct);

module.exports = router;

// router.get('/product',function(req,res){

// 	res.status(200);
// 	res.json({"title":"welcome to rest test api"});
// });

