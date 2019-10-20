/* there is a library with many books. We can add a new book to the library.
Customer can:
 take a book - done
 prolong a booking - to do 
 return a book - to do
  */

class Customer {
  constructor(name, abonumber) {
    this.name = name;
    this.abonumber = abonumber;
    this.books = [];
  }

  takeBook(book) {
    book.assignTo(this);
    this.books.push(book);
    console.log(this.name + " borrowed the book ", book.name);
  }

  returnBook(book) {
    this.books.slice(book);
    console.log("From your order " + this.books + "is deleted " + book);
  }
}

class Book {
  constructor(name) {
    this.name = name;
  }

  assignTo(customer) {
    this.owner = customer;
  }
}

class Library {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.books = [];
    this.customers = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listBooks() {
    this.books.forEach(book => console.log(book));
  }
}

max = new Customer("Max", 77777);
eva = new Customer("Eva", 65437);
console.log(max, eva);

book1 = new Book("BigBook");
book2 = new Book("RedBook");
book3 = new Book("FirstBook");

library1 = new Library("City Library", "Berlin 10000");
library1.addBook(book1);
library1.addBook(book2);
library1.addBook(book3);

library1.listBooks();

eva.takeBook(book1);
eva.takeBook(book2);

console.log(book1.owner);
