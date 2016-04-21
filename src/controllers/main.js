//var express = require('express');

module.exports.index = function(req,res){

// res.render(template-to-use,'javascript object containing the data')
	res.render('index',{title:'my express app'});
}