const myLibrary = [];

function Book(name, author, releaseYear, pages, pagesRead, read) {
    this.name = name
    this.author = author
    this.releaseYear = releaseYear
    this.pages = pages
    this.pagesRead = pagesRead
    this.read = read
}

function addBookToLibrary(Book) {
    myLibrary.push(Book)
}


const showButton = document.getElementById('show_dialog');
const dialog = document.querySelector('dialog');
const xButton = document.getElementById('xBtn');
const cancelButton = document.getElementById('cancel_btn');
const confirmButton = document.getElementById('confirm_btn');
const clearButton = document.getElementById('clear_btn');
const outputBox = document.querySelector('output');
const deleteCardButton = document.getElementsByClassName('delete_card_btn');
const toggle = document.querySelectorAll('.switch');

let cards = document.getElementsByClassName('card');

for (let i = 0; i < cards.length; i++) {
    deleteCardButton[i].addEventListener('click', removeCard);
    toggle[i].addEventListener('click', changeStatus);
};


function removeCard(event) {
    const button = event.target; 
    const card = button.closest('.card'); 
    if (card) {
        card.remove(); 
    }
}


let active;

function changeStatus(e) {
    if (active) {
        changeStatusUnRead(e);
        active = false;
    } else {
        changeStatusRead(e);
        active = true;
    } return active;
}

function changeStatusRead(e) {
    const button = e.target;
    const card = button.closest('.card');
    const readStatus = card.querySelector('#read_x_unread');
    card.style.background = 'linear-gradient(135deg, #23A4A4 0%, #2388CB 49%, #144E75 100%)';
    readStatus.textContent = 'Mark as Unread';
}

function changeStatusUnRead(e) {
    const button = e.target;
    const card = button.closest('.card');
    const readStatus = card.querySelector('#read_x_unread');
    card.style.background = 'linear-gradient(135deg, #99B5BC 0%, #4A4F53 49%, #144E75 100%)';
    readStatus.textContent = 'Mark as Read';
}

showButton.addEventListener('click', () => {
    dialog.showModal();
  });

xButton.addEventListener('click', () => {
    event.preventDefault();
    clearForm();
    dialog.close();
})

cancelButton.addEventListener('click', () => {
    clearForm();
    dialog.close();
})

confirmButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (isEmpty(document.getElementById('dialog_book_title').value) &&
    isEmpty(this.author = document.getElementById('dialog_book_author').value)) {
        alert('Please write the book name or the author name!');
    } else {
        addBook();
        emptyCardsContainer();
        createBookCard(book);
        clearForm();
        dialog.close(); 
    }
  });

function isEmpty(value) {
    return (value == null || (typeof value === "string" && value.trim().length === 0));
}  

function clearForm () {
    document.getElementById('book_dialog').reset();
}

clearButton.addEventListener('click', clearForm());

let book = document.querySelector('form');

function addBook (book) {
    this.name = document.getElementById('dialog_book_title').value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());;
    this.author = document.getElementById('dialog_book_author').value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());;
    this.releaseYear = document.getElementById('dialog_publish_date').value;
    this.pages = document.getElementById('dialog_number_of_pages').value;
    this.pagesRead = document.getElementById('dialog_number_of_read_pages').value;
    this.read = document.getElementById('readNotRead').value;
    
    const newBook = new Book(name, author, releaseYear, pages, pagesRead, read);
    addBookToLibrary(newBook);
    console.log(myLibrary);
}

function emptyCardsContainer () {
    const cardsContainer = document.getElementById('cards_container');
    cardsContainer.replaceChildren();
}

function createBookCard () {
    myLibrary.forEach((book) => {
    const cardsContainer = document.getElementById('cards_container');
    const bookCard = document.createElement('div');
    bookCard.classList.add('card');
    const bookCardHeader = document.createElement('div');
    bookCardHeader.classList.add('card_header');
    const bookCardDeleteButton = document.createElement('button');
    bookCardDeleteButton.classList.add('delete_card_btn');
    const bookCardContainer = document.createElement('div');
    bookCardContainer.classList.add('card_container');
    const bookCardBookName = document.createElement('div');
    bookCardBookName.setAttribute('id', 'book_name');
    const bookCardBookAuthor = document.createElement('div');
    bookCardBookAuthor.setAttribute('id', 'card_book_author');
    const bookCardReleaseYear = document.createElement('div');
    bookCardReleaseYear.setAttribute('id', 'card_release_year');
    const bookCardNumberOfPages = document.createElement('div');
    bookCardNumberOfPages.setAttribute('id', 'card_number_of_pages');
    const bookCardNumberOfReadPages = document.createElement('div');
    bookCardNumberOfReadPages.setAttribute('id', 'card_number_of_read_pages');
    const bookCardFoter = document.createElement('div');
    bookCardFoter.classList.add('card_footer');
    const bookCardReadUnread = document.createElement('div');
    bookCardReadUnread.setAttribute('id', 'read_x_unread');
    const bookCardSwitch = document.createElement('div');
    bookCardSwitch.classList.add('switch');
    const bookCardInput = document.createElement('input');
    bookCardInput.setAttribute('type', 'checkbox');
    const bookCardSlider = document.createElement('span');
    bookCardSlider.classList.add('slider', 'round');

    bookCardBookName.textContent = `${book.name}`;
    bookCardBookAuthor.textContent = `By: ${book.author}`;
    bookCardReleaseYear.textContent = `Publish year: ${book.releaseYear}`;
    bookCardNumberOfPages.textContent = `Number of pages: ${book.pages}`;
    bookCardNumberOfReadPages.textContent = `Number of read pages: ${book.pagesRead}`;
    bookCardDeleteButton.textContent = 'X'

    if (book.read == 'Read') {
        active = true;
        bookCard.style.background = 'linear-gradient(135deg, #23A4A4 0%, #2388CB 49%, #144E75 100%)';
        bookCardReadUnread.textContent = 'Mark as Unread';
    } else {
        active = false;
        bookCard.style.background = 'linear-gradient(135deg, #99B5BC 0%, #4A4F53 49%, #144E75 100%)';
        bookCardReadUnread.textContent = 'Mark as Read';
    };

    bookCardHeader.appendChild(bookCardDeleteButton);
    bookCardContainer.appendChild(bookCardBookName);
    bookCardContainer.appendChild(bookCardBookAuthor);
    bookCardContainer.appendChild(bookCardReleaseYear);
    bookCardContainer.appendChild(bookCardNumberOfPages);
    bookCardContainer.appendChild(bookCardNumberOfReadPages);
    bookCardSwitch.appendChild(bookCardInput);
    bookCardSwitch.appendChild(bookCardSlider);
    bookCardFoter.appendChild(bookCardReadUnread);
    bookCardFoter.appendChild(bookCardSwitch);
    bookCard.appendChild(bookCardHeader);
    bookCard.appendChild(bookCardContainer);
    bookCard.appendChild(bookCardFoter);
    cardsContainer.insertBefore(bookCard, cardsContainer.firstChild);

    bookCardDeleteButton.addEventListener('click', removeCard);
    bookCardSwitch.addEventListener('click', changeStatus);
})
}


const orderCards =  document.querySelector('#order_by');
const ascDsc = document.querySelector('#order');
orderCards.addEventListener('change', orderBy);
ascDsc.addEventListener('change', order)

function orderBy() {
    if (orderCards.value === 'book_name') {
        if (ascDsc.value === 'ascendent') {
            myLibrary.sort((a, b) => (a.name < b.name) ? 1 : (a.name === b.name) ? ((a.author < b.author) ? 1 : -1) : -1 );
        } else if (ascDsc.value === 'descendent') {
            myLibrary.sort((a, b) => (a.name < b.name) ? -1 : (a.name === b.name) ? ((a.author < b.author) ? 1 : -1) : -1 );
        };   
    } else if (orderCards.value === 'author_name') {
        if (ascDsc.value === 'ascendent') {
            myLibrary.sort((a, b) => (a.author < b.author) ? 1 : (a.author === b.author) ? ((a.name < b.name) ? 1 : -1) : -1 );
        } else if (ascDsc.value === 'descendent') {
            myLibrary.sort((a, b) => (a.author < b.author) ? -1 : (a.author === b.author) ? ((a.name < b.name) ? 1 : -1) : -1 );
        }
    } else if (orderCards.value === 'publish_date') {
        if (ascDsc.value === 'ascendent') {
            myLibrary.sort((a, b) => (a.releaseYear < b.releaseYear) ? 1 : (a.releaseYear === b.releaseYear) ? ((a.name < b.name) ? 1 : -1) : -1 );
        } else if (ascDsc.value === 'descendent') {
            myLibrary.sort((a, b) => (a.releaseYear < b.releaseYear) ? -1 : (a.releaseYear === b.releaseYear) ? ((a.name < b.name) ? 1 : -1) : -1 );
        }
    };
    emptyCardsContainer();
    createBookCard();
};

function order () {
    if (orderCards.value === 'book_name') {
        if (ascDsc.value === 'ascendent') {
            myLibrary.sort((a, b) => (a.name < b.name) ? 1 : (a.name === b.name) ? ((a.author < b.author) ? 1 : -1) : -1 );  
        } else {
            myLibrary.sort((a, b) => (a.name < b.name) ? -1 : (a.name === b.name) ? ((a.author < b.author) ? 1 : -1) : -1 ); 
        }; 
    } else if (orderCards.value === 'author_name') {
        if (ascDsc.value === 'ascendent') {
            myLibrary.sort((a, b) => (a.author < b.author) ? 1 : (a.author === b.author) ? ((a.name < b.name) ? 1 : -1) : -1 );
        } else {
            myLibrary.sort((a, b) => (a.author < b.author) ? -1 : (a.author === b.author) ? ((a.name < b.name) ? 1 : -1) : -1 );
        };
    } else if (orderCards.value === 'publish_date') {
        if (ascDsc.value === 'ascendent') {
            myLibrary.sort((a, b) => (a.releaseYear < b.releaseYear) ? 1 : (a.releaseYear === b.releaseYear) ? ((a.name < b.name) ? 1 : -1) : -1 );
        } else {
            myLibrary.sort((a, b) => (a.releaseYear < b.releaseYear) ? -1 : (a.releaseYear === b.releaseYear) ? ((a.name < b.name) ? 1 : -1) : -1 );
        }
    };
    emptyCardsContainer();
    createBookCard();
}

const clearAllButton = document.getElementById('clearAll_btn');
clearAllButton.addEventListener('click', emptyCardsContainer);