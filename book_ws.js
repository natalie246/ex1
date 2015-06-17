var bookStore = require('./bookStore');
var express = require('express');
var url = require('url');
var util = require('util');
var app = express();

var port = process.env.PORT || 3000;
app.listen(port);
console.log("listening on port " + port);



var myStore = bookStore.getBookStore("stimatzki");
myStore.setBooksFromJSON();

app.get('/', function(req,res) {
res.send("server root");
});


app.get('/printAllBooks',function (req,res){ 
	app.set('json space',3);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type, Accept");
		res.json(myStore.printAllBooks());

});

app.get('/getBookPriceByName/:bookName',function (req,res){ 
	app.set('json space',3);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type, Accept");
		res.json(myStore.getBookPriceByName(req.params.bookName));
});

app.get('/getAllBooksByCategory/:bookCategory',function (req,res){ 
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type, Accept");
	app.set('json space',3);
	res.json(myStore.getAllBooksByCategory(req.params.bookCategory));
});

app.get('/getMostExpensiveBook',function (req,res){ 
	app.set('json space',3);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type, Accept");
		res.json(myStore.getMostExpensiveBook());
});
