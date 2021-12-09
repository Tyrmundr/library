"use strict"

//Main DOM Cache

//Button: New Book
const btnNew = document.getElementById("btn-new");

//Form window that's going to pop up
const popupDisplay = document.getElementById("popup");

//Button: Add (inside form)
const btnAdd = document.getElementById("btn-add")

//Book constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value;
        this.read = form.read.value;
    }
}

//Event Listeners:
// Bring up form on click
btnNew.addEventListener("click", () => popupDisplay.style.display = "block");

// Add new book to library on click
btnAdd.addEventListener("click", checkInput);

//Functions

//Adding book to library
let myLibrary = [];
let newBook;

function checkInput() {
    event.preventDefault();
    if(form.title.value && form.author.value && form.pages.value) {
        addToLibrary();
    } else {
        alert(`You have not given an answer everywhere!`)
    }
}

function addToLibrary() {
    event.preventDefault();
    popupDisplay.style.display = "none";

    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    render();
    form.reset();
}

//Render function - for displaying books
function render() {
    const display = document.getElementById("library");
    const books = document.querySelectorAll(".book");
    books.forEach(book => display.removeChild(book));

    for(let i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i])
    }
}

//Creating the book - for displaying it in browser
function createBook(item) {
    //Caching DOM elements to add:
    //Referencing the Library div - it includes all different books we'll add
    const library = document.getElementById("library");

    //Div which'll contain all the details
    const bookDiv = document.createElement("div");
    //setting attribute by which it can be removed both by rendering and remove btn
    bookDiv.classList.add("book");
    bookDiv.setAttribute("id", myLibrary.indexOf(item));

    //Div for each line of text-info
    const paraTitle = document.createElement("div");
    const paraAuthor = document.createElement("div");
    const paraPages = document.createElement("div");

    //Button for read or not property
    const paraRead = document.createElement("button");

    //Button to remove a book
    const btnRemove = document.createElement("button");

    //Creating and assigning elements
    paraTitle.innerText = item.title;
    bookDiv.appendChild(paraTitle);

    paraAuthor.innerText = item.author;
    bookDiv.appendChild(paraAuthor);

    paraPages.innerText = item.pages;
    bookDiv.appendChild(paraPages);

    bookDiv.appendChild(paraRead);
    if(item.read === false) {
        paraRead.innerText = "Unread";
    } else {
        paraRead.innerText = "Read";
    }

    btnRemove.innerText = "Remove";
    bookDiv.appendChild(btnRemove);

    library.appendChild(bookDiv);

    btnRemove.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        render();
    })
}