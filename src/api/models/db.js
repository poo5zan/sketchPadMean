//db.js

var mongoose = require('mongoose');
require('./schema/productSchema.js');

var dbUrl = 'mongodb://localhost/testPujan';
mongoose.connect(dbUrl);

//db events
mongoose.connection.on('connected',function(){
	console.log('mongoose connected');
});

mongoose.connection.on('error',function(err){
	console.log('error ' + err);	
});

mongoose.connection.on('disconnected',function(){
	console.log('disconnected');
});
