const Book = require('./book');
module.exports = class Order {
    constructor(customer, books = [], date, id) {
      this.customer = customer;
      this.books = books;
      this.date = date;
      this.id = id|| Math.floor(Math.random()* 1000000);
    }
  
    static create ({id, customer, books, date}){
       const booksArray = books.map(Book.create);
       const order = new Order(customer, booksArray, date, id);
       return order
    }
}