const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    const book1 = new Book('The Alchemist', 'Utsav Adhikari', 250);
    const book2 = new Book('The Game', 'Utsav Parajuli', 280);
    myLibrary.push(book1, book2);
}

function displayBooks() {
    const myDiv = document.querySelector(".books");
    myDiv.innerHTML = ""; // Clear existing content before appending

    for (const book of myLibrary) {
        const bookElement = document.createElement("div");
        bookElement.className = "book";

        // Adding book details
        bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
        `;

        myDiv.appendChild(bookElement); // Append the book details to the div
    }
}

// Call the functions to populate and display books
addBookToLibrary();
displayBooks();
