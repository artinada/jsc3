const Customer = require('./models/customer');
const Book = require('./models/book');
const Library = require('./models/library');
const Database = require('./models/database')


// max = new Customer("Max", 77777);
// eva = new Customer("Eva", 65437);

// book1 = new Book("BigBook", 1);
// book2 = new Book("RedBook", 2);
// book3 = new Book("Первая книга", 3);

// library1 = new Library("Berlin City Library", "Breite Str. 30-36, 10178 Berlin");
// library2 = new Library("Philological Library", "Habelschwerdter Allee 45, 14195 Berlin")

// library1.addBook(book1);
// library1.addBook(book2);
// library1.addBook(book3);

// console.log(library1.listBooks)
// max.assignToLibrary(library1);

//  eva.takeBook(book3, "13.11.2018");
//  eva.takeBook(book2, "13.11.2018");
//  max.takeBook(book1, "13.11.2018");

//console.log(book1.owner);

// Database.save('customer.json', eva);
// Database.save('book.json', book1);
// Database.save('library.json', library1);

const loadedFile = Database.load('library.json');

//const library1 = new Library(loadedFile.name, loadedFile.address, loadedFile.allBooks, loadedFile.allCustomers)
const library2 = Library.create(loadedFile)

const library3 = new Library("New Library", "Street 1")
console.log(library.allBooks[0].assignToLibrary(library3));

//library2.listBooks
//library1.allBooks.forEach(book => console.log(book.name))
//library2.listCustomers

