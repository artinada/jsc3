module.exports = class Book {
    constructor(name, bookId) {
      this.name = name;
      this.bookId = bookId;
    }
  
    assignTo(customer, day) {
      this.owner = customer.name;
      this.day = day;
    }
  }