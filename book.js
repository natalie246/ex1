function Book(name, category, price){

	this.name = name;
	this.category = category;
	this.price = price;
}


exports.getBook = function(name, category, price){
	var myBook = new Book(name, category, price);
		return myBook;
	
}