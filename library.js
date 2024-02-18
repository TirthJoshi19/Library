let MyLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

function toggleRead(index){
    MyLibrary[index].toggleRead();
    render();
}

function removeBook(index){
    MyLibrary.splice(index, 1);
    render();
}
function render() {
    
    let libraryBook = document.querySelector("#library");
    
    libraryBook.innerHTML = ''
    for (let i = 0; i < MyLibrary.length; i++) {
        let book = MyLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "bookcard")
        bookEl.innerHTML = `
        <div class="cardh">
        <h3 class="title">${book.title}</h3>
        <h5 class="author">${book.author}</h5>
        
    </div>
    <div class="cbody">
        <p>${book.pages} pages</p>
        <p class="readornot">${book.read ? "Read" : "Not read yet"} </p>
        <button onclick="removeBook(${i})">Remove</button>
        <button onclick="toggleRead(${i})">Toggle Read</button>
    </div>`
        libraryBook.appendChild(bookEl);
}
}
function addBook() {
    let title = document.querySelector('#title').value;
    let author = document.getElementById("Author").value;
    let pages = document.getElementById("Pages:").value;
    let read = document.getElementById('Read:').checked;
    let newBook = new Book(title, author, pages, read);
    MyLibrary.push(newBook);
    render();
}

let newBookBtn = document.getElementById('new-book-btn');


newBookBtn.addEventListener("click", () => {
    let bookForm = document.getElementById("book-form");
    bookForm.style.display = "block";
    let bgDiv = document.getElementById("formb");
    bgDiv.style.display = "flex";
})
document.querySelector("#book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addBook()
})
