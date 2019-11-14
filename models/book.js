module.exports = class Book {
    constructor(name) {
      this.name = name;
      this.library;
    }
  
    assignToLibrary(library){
      this.library = library;
      library.allBooks.push(this);
    }

    static create (jsonObj){
      const book =  new Book(jsonObj.name);
      book.id = jsonObj.id; 
      return book;
    }
}