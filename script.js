"use strict"

//Main DOM Cache

//Button: New Book
const btnNew = document.getElementById("btn-new");

//Form window that's going to pop up
const popupDisplay = document.getElementById("popup");

//Button: Add (inside form)
const btnAdd = document.getElementById("btn-add")

//Book constructor
function Book(title, author, pages, read) {
    this.title = title; // form.title.value;
    this.author = author; //form.author.value;
    this.pages = pages; //form.pages.value;
    this.read = read; //form.read.value;
}

//Event Listeners:
// Bring up form on click
btnNew.addEventListener("click", () => popupDisplay.style.display = "block");

// Add new book to library on click
btnAdd.addEventListener("click", addToLibrary);

//Functions

//Adding book to library
let myLibrary = [];
let newBook;

function addToLibrary() {
    event.preventDefault();
    popupDisplay.style.display = "none";

    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    form.reset();
}

//Render function - for displaying books
function render() {
    const display = document.getElementById("library")
    const books = document.querySelectorAll(".book")

    for(let i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i])
    }
}