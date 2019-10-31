module.exports = class Customer {
    constructor(name, abonumber, library) {
      this.name = name;
      this.abonumber = abonumber;
      this.basket = [];
    }
  
    takeBook(book, day) {
      book.assignTo(this);
      this.basket.push(book, day);
      
      console.log(this.name + " borrowed the book ", book.name, "on ", day);
    }

    assignToLibrary(library) {
      library.customers.push(this);
      console.log(this.name + " is member of ", library.name);
    }
  
    // returnBook(book) {
    //   this.books.slice(book);
    //   console.log("From your order " + this.books + "is deleted " + book);
    // }
  }
  