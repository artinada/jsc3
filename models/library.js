const Customer = require('./customer');
const Book = require('./book');
const Order = require('./order');

module.exports = class Library {
    constructor(name, address, allBooks = [], allCustomers = [], allOrders = []) {
      this.name = name;
      this.address = address;
      this.allBooks = allBooks;
      this.allCustomers = allCustomers;
      this.allOrders = allOrders;
    }

    listBooks() {
      this.allBooks.forEach(printBook);
    }

    listCustomers() {
      this.allCustomers.forEach(customer => console.log(customer.name));
    }

    listOrders(){
      this.allOrders.forEach(order => console.log(order));
    }

//simple way to crate an object from loaded file    
    // static create(file){
    //    return new Library(file.name, file.address, file.allBooks, file.allCustomers)
    // }

    static create({id, name, address, allBooks, allCustomers, allOrders}){
      const books = allBooks.map(Book.create)
      const customers = allCustomers.map(Customer.create)
      const orders = allOrders.map(Order.create)
      const library = new Library(name, address, books, customers, orders)
      library.id = id;
      return library
   }
  }

  const printBook = book => console.log(book.name);
  