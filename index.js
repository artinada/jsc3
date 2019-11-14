const Customer = require('./models/customer');
const Book = require('./models/book');
const Order = require('./models/order');
const Library = require('./models/library');
const Database = require('./models/database')
const BookService = require('./services/book-service')
const CustomerService = require('./services/customer-service')
const LibraryService = require('./services/library-service')
const OrderService = require('./services/order-service')

console.log('Hello World!')

async function main() {
//Objects creating    
    const max = new Customer("Max", 77777);
    const eva = new Customer("Eva", 65437);

    const book1 = new Book("BigBook");
    const book2 = new Book("RedBook");
    const book3 = new Book("Первая книга");
    const book4 = new Book("RedBook");

    const library1 = new Library("Berlin City Library", "Breite Str. 30-36, 10178 Berlin");
    const library2 = new Library("Philological Library", "Habelschwerdter Allee 45, 14195 Berlin")
    
    book1.assignToLibrary(library1)
    book2.assignToLibrary(library1)
    book3.assignToLibrary(library1)
    book4.assignToLibrary(library2)

    max.assignToLibrary(library1);  

    eva.takeBook([book3], "13.11.2018");
    eva.takeBook([book2], "15.11.2018");
    max.takeBook([book1], "13.10.2018");

    library1.listOrders();

//adding Objects to DB    
    await CustomerService.add(max)
    await CustomerService.add(eva)
    const showPeople = await CustomerService.findAll()

    await BookService.add(book1)
    await BookService.add(book2)
    await BookService.add(book3)
    const showBook = await BookService.findAll(); 

    await LibraryService.add(library1);
    const showLibraries = await LibraryService.findAll()
    showLibraries[0].listOrders()
}

main();
