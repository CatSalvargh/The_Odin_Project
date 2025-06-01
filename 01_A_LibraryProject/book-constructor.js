const myLibrary = [];
const books = [{title: 'The Hobbit', author: 'J.R.R Tolkien', pages: 350, read: false},
    {title: 'A thousand years of solitude', author: 'Gabriel Garcia Marquez', pages: 496, read: true},
    {title: 'Las ensenanzas de Don Carlos', author: 'Victor Sanchez', pages: 252, read: false},
    {title: 'El hombre en busca de sentido', author: 'Viktor Frankl', pages: 168, read: true},
];

// ======= Book Class and prototype
function Book(title, author, pages, read, book_id) {    
    if(!new.target){ 
        throw Error("Use the keyword 'new'!")
    }
    this.id = book_id
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

Book.prototype.changeStatus = function() {
       this.read = !this.read
}

// ======= Library functions: Add, Display
function addToLibrary(title, author, pages, read) {
    newBook = crypto.randomUUID()
    myLibrary.push(new Book(title, author, pages, read, newBook))
}

function displayLibrary() {
    const table = document.querySelector('.js-table-body')
    table.innerHTML = ''
    myLibrary.forEach((book) => {
        table.innerHTML +=
        `<tr class="book" data-id=${book.id}>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.read ? 'Yes' : "No"}</td>
            <td><button class="btn" onClick="removeBook('${book.id}')">Remove</button></td>
            <td><button class="btn js-read-btn" onClick="changeStatus('${book.id}')">Mark read</button></td>
        </tr>`;  
    })
}

books.forEach((book) => {
    addToLibrary(book.title, book.author, book.pages, book.read)
})

displayLibrary()
showFormDialog()

// ======= Support functions: Show form using <dialog> (includes prevent default, i.e., don't send to server), remove book, change book's read status

function showFormDialog() {
    const open = document.querySelector('.js-new-btn')
    const dialog = document.querySelector('dialog')
    const submit = document.querySelector('.js-add-btn')
    
    open.addEventListener(
        'click', () => {
            dialog.showModal()
        }
    )

    submit.addEventListener('click', dontSendToServer, false)
    function dontSendToServer(event){
        event.preventDefault()
        dialog.close();
    }
}

function removeBook(id_remove) {
    const allBooks = document.querySelectorAll('.book')
    allBooks.forEach(
        (book, i) => {
            if (book.dataset.id == id_remove) {
                myLibrary.splice(i,1)
            }
        })
    displayLibrary()
}

function changeStatus(id) {
    myLibrary.forEach(
        (book, i) => {
            if (book.id == id) {   
                book.status = book.changeStatus();
            }
        })
    displayLibrary()
}