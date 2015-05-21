var bookStore = require('./bookStore');
var express = require('express');
var url = require('url');
var util = require('util');
var app = express();

app.listen(8080);
console.log("listening on port 8080");



var myStore = bookStore.getBookStore("stimatzki");
myStore.setBooksFromJSON();

app.get('/', function(req,res) {
res.send("server root");
});


app.get('/printAllBooks',function (req,res){ 
	app.set('json space',3);
		res.json(myStore.printAllBooks());

});

app.get('/getBookPriceByName/:bookName',function (req,res){ 
	app.set('json space',3);
		res.json(myStore.getBookPriceByName(req.params.bookName));
});

app.get('/getAllBooksByCategory/:bookCategory',function (req,res){ 
	app.set('json space',3);
		res.json(myStore.getAllBooksByCategory(req.params.bookCategory));
});

app.get('/getMostExpensiveBook',function (req,res){ 
	app.set('json space',3);
		res.json(myStore.getMostExpensiveBook());
});
