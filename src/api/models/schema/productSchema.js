//product schema

var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
	name: {type: String, required: true},
	price:Number,
	rating:Number,
	description:String,
	coords: {type: [Number], index: '2dsphere'}
});

mongoose.model('product',productSchema);