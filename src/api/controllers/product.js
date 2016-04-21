//productControler

var mongoose = require('mongoose');
var productDbModel = mongoose.model('product');

module.exports.getProduct = function(req,res){
	productDbModel.findOne({'name':'product1'})
		.exec(function(err,data){
			console.log(err);
			console.log(data);
			res.status(200);
	        res.json(data);
		});
	
}

