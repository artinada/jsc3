const Order = require('./order');

module.exports = class Customer {
    constructor(name, abonumber) {
      this.name = name;
      this.abonumber = abonumber;
    }

    static create(jsonObj){
      const cust =  new Customer(jsonObj.name, jsonObj.abonumber)
      cust.id = jsonObj.id
      return cust;
    }
  
    takeBook(books, day) {
      const order = new Order(this, books, day);
      books.forEach(book => {book.library.allOrders.push(order)});
      console.log(this.name + " borrowed the book ", books, "on ", day);

 //     order.booksArray.push({book, day});
    }

    assignToLibrary(library) {
      library.allCustomers.push(this);
      console.log(this.name + " is member of ", library.name);
    }
  }
  