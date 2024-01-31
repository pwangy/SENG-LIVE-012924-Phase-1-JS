//* BookStore has been moved to data.js
console.log(bookStore);

// test

//* Code from previous lecture

function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

//* New code starts here
const header = document.getElementById("header")

//* Concepts
//! both return the first alleged DOM node that matched the selector
//* querySelector => TARGETS BY ANYTHING (id, class, position, data attributes)
document.querySelector('#store-name') //! ids are targeted with a #
document.querySelector('.list') //! classes are targeted with a .
//* getElementById => TARGETS ONLY BY ID (if present)
document.getElementById('store-name') //! no need for #


//! innerText -> is also aware of style and will not return the text of hidden elements, whereas textContent will.
//! textContent -> gets the content of all elements, including <script> and <style> elements
//! innerHTML -> includes the HTML markup and deserves a special WARNING

// TODO CRUD

// TODO 💡 Create a new DOM element of your choice and add it to the page

function addNodeToPage() {
  //! create a new node of any kind
  const span = document.createElement('span')
  span.id = "new-span"
  // span.className = "red"
  span.setAttribute("classname", "red")
  //! add some text to that node
  span.innerText = "Hello World!"
  //! add the newly created el to the page
  header.appendChild(span) // ONLY ONE EL OF TYPE NODE
  // header.append(span, 'hello') // MULTIPLE ELEMENTS OF DIFFERENT TYPES
}
// addNodeToPage()

// TODO 💡 Create a function that sets the text content of the header to the bookstore name.
function updateHeaderOnLoad() {
  header.textContent = bookStore.name
}

updateHeaderOnLoad()
// TODO 💡 Create a function that grabs all the divs from the footer and render the bookstore name, address, and hours
function addFooterInfo() {
  const allDivs = Array.from(document.querySelectorAll('footer > div'))
  allDivs.forEach(div => {
    div.innerText = bookStore[div.id]
  })
}

addFooterInfo()
// TODO 💡 Remove an element of your choice from the DOM
function removeElFromDom() {
  const header = document.getElementById('store-name')
  header.remove()
}

// TODO 💡 Exercise After Break
// create a function called renderBook(book)
// it will take a book object as an argument
// and create the html structure for rendering 
// that book and insert it into our webpage!

// should create an li element that looks something like this:
  // <li class="list-li">
  //   <h3>Eloquent JavaScript : A Modern Introduction to Programming</h3>
  //   <p>Marjin Haverbeke</p>
  //   <p>$10.00</p>
  //   <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
  //   <button>Delete</button>
  // </li>
function renderBookAsHTML(book) {
  const bookList = document.querySelector('#book-list')
  bookList.innerHTML += `
    <li class="list-li">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>${formatPrice(book.price)}</p>
      <img src=${book.imageUrl} alt=${book.title} />
      <button>Delete</button>
    </li>
  `
}

function renderBook(book) {
  //! create elements section
  const parentLi = document.createElement('li')
  const bookTitle = document.createElement('h3')
  const bookAuthor = document.createElement('p')
  const bookPrice = document.createElement('p')
  const bookImg = document.createElement('img')
  const bookDeleteBtn = document.createElement('button')

  //! Set attributes and text
  parentLi.className = "list-li"
  bookTitle.innerText = book.title
  bookAuthor.innerText = book.author
  bookPrice.innerText = formatPrice(book.price)
  bookTitle.innerText = book.title
  bookImg.src = book.imageUrl
  bookImg.alt = book.title
  bookDeleteBtn.innerText = "Delete"

  //! Assemble like a russian doll
  parentLi.append(bookTitle, bookAuthor, bookPrice, bookImg, bookDeleteBtn)

  //! Time to put the newly created <li> onto the page inside the <ul>
  const bookList = document.querySelector('#book-list')
  bookList.appendChild(parentLi)
}

// bookStore.inventory.forEach(function(book) {
//   renderBook(book)
// })

// bookStore.inventory.forEach(book => renderBook(book))

bookStore.inventory.forEach(renderBook)