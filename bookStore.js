var book = require('./book');

var theBooks = {
	"Stock":[
{
	"name": "beautiful mind",
	"category": "Drama",
	"price": "88"
},
{
	"name": "shantaram",
	"category": "Drama",
	"price": "89"
},
{
	"name": "A Game of Thrones",
	"category": "Fantasy",
	"price": "90"
}]
};


function BookStore(name){
	this.name = name;
	this.bookArray = [];	
}

BookStore.prototype.setBooksFromJSON = function(){
	for (var i = 0; i < theBooks.Stock.length; i++){
	var newBook = book.getBook(theBooks.Stock[i].name, theBooks.Stock[i].category, theBooks.Stock[i].price);
	this.bookArray.push(newBook);
	}
}

BookStore.prototype.printAllBooks = function(){
	console.log("\nprintAllBooks\nthe books: " );
	for(var i = 0; i < this.bookArray.length; i++){
		console.log(this.bookArray[i].name);	
	}
	return this.bookArray;
}

BookStore.prototype.getBookPriceByName = function(bookName){
	for(var i=0; i<this.bookArray.length; i++){
		if( this.bookArray[i].name == bookName){
			console.log ("\ngetBookPriceByName\nName: " + this.bookArray[i].name + " Price: " + this.bookArray[i].price);
			return this.bookArray[i];
		}
		if( this.bookArray[i].name != bookName){
		console.log("No such book");
		return {"":""};
		}
	}
	
}

BookStore.prototype.getAllBooksByCategory = function(category){
	var booksInCategoryArray = [];
	for(var i=0; i<this.bookArray.length; i++){
		if( this.bookArray[i].category == category){
			console.log ("\ngetAllBooksByCategory\nName: " + this.bookArray[i].name +"  Category: " + this.bookArray[i].category + "  Price: " + this.bookArray[i].price);
			booksInCategoryArray.push(this.bookArray[i]);
		}
	}
	return booksInCategoryArray;
}

BookStore.prototype.getMostExpensiveBook = function(){
	var maxPrice=null;
	var maxBook=null;
	for(var i=0; i<this.bookArray.length; i++){
		if(this.bookArray[i].price > maxPrice){
			maxPrice = this.bookArray[i].price;
			maxBook = this.bookArray[i];
		}
	}
	return maxBook;
}

exports.getBookStore = function(name){
	var myBookStore = new BookStore(name);
			return myBookStore;
}

