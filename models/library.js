module.exports = class Library {
    constructor(name, address) {
      this.name = name;
      this.address = address;
      this.allBooks = [];
      this.customers = [];
    }
  
    addBook(book) {
      this.allBooks.push(book);
    }
  
    listBooks() {
      this.allBooks.forEach(book => console.log(book));
    }
  }
  