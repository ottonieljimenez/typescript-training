// Book interface
interface Book {
    readonly title: string;
    readonly author: string;
}

// function that displays the information of a book
function showBookInformation(book: Book) {
    console.log(book);
}

// Book object
const book: Book = {
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez"
}

// show information of the newly created book
showBookInformation(book);

// attempt modifying the book's properties to make sure
// they are immutable (throws errors since this is not possible
// given the read-only nature of the properties)
// book.title = "El Coronel No Tiene Quien Le Escriba";
// book.author = "Gabo Márquez";