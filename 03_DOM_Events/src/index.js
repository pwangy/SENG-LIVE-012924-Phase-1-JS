////////////////////////////////////////////////////////////////
// Yesterday's Code
////////////////////////////////////////////////////////////////

console.log(bookStore);

function formatPrice(price) {
    return '$' + Number.parseFloat(price).toFixed(2);
}
function setHeader() {
    const h1 = document.querySelector("#store-name")
    h1.innerText = bookStore.name
}
function changeFooter() {
    const divName = document.getElementById("store")
    divName.innerText = bookStore.name
    const divAddress = document.getElementById("address")
    divAddress.innerText = bookStore.address
    const divNumber = document.getElementById("number")
    divNumber.innerText = bookStore.number
}
function addParagraph() {
    const p = document.createElement("p") // I just created a new orphan node
    p.innerText = "Something random!"
    p.id = "random"
    document.querySelector("main").appendChild(p)
    document.querySelector("main").append(p, "a string here", 7)
}
function removeEl(){
    const h1 = document.querySelector("div#header div h1")
    h1.remove()
}
function changeHeader() {
    const h1 = document.querySelector("div#header div h1")
    h1.innerText = "A new name"
}
function renderBook(book) {
    const li = document.createElement("li")
    li.className = "list-li"
    const h3 = document.createElement("h3")
    h3.innerText = book.title
    const pAuthor = document.createElement("p")
    pAuthor.innerText = book.author
    const pPrice = document.createElement("p")
    pPrice.innerText = formatPrice(book.price)
    const img = document.createElement("img")
    img.src = book.imageUrl
    img.alt = book.title
    const button = document.createElement("button")
    button.addEventListener('click', () => {
        li.remove()
    })
    button.innerText = "Delete"
    li.append(h3, pAuthor, pPrice, img, button)
    // figure out where
    // target that place with querySelector/getElementById
    const ulList = document.getElementById("book-list")
    // append
    ulList.appendChild(li)
}
function renderBookAsHTML(book) {
    const ulList = document.getElementById("book-list")
    ulList.innerHTML += `
    <li class="list-li">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>${formatPrice(book.price)}</p>
        <img src=${book.imageUrl} alt=${book.title}/>
        <button class="delete-btn">Delete</button>
    </li>
    `
}

setHeader()
changeFooter()
bookStore.inventory.forEach(bookObj => renderBookAsHTML(bookObj))
// bookStore.inventory.forEach(renderBook) //this line leverages JS magic 
// BUT IT'S IDENTICAL TO THE ONE ABOVE

////////////////////////////////////////////////////////////////
// Today's Code
// Event Listeners/Handlers (Behavior => Data => Display)
////////////////////////////////////////////////////////////////
//! Generic Syntax For Attaching Event Listeners

// domNodeElement.addEventListener(theEventInStringformat, callbackFunctionThatDecidesWhatToDo, optionalTrueBooleanHereForCapturing)

//! Suggestions When Working With the DOM

//TODO 1. Set global selector variables at the top of the file for everyone to use
//TODO 2. Attach event listeners to the correct DOM nodes
//TODO 3. Decide if creating the callback anonymously in-place OR pass a function reference (promotes reusability)
//TODO 4. Does the callback have access to all the data it needs or should it receive parameters?

const toggleBtn = document.querySelector('#toggleForm')
const form = document.querySelector('#book-form')
const allDelBtns = document.querySelectorAll('.delete-btn')
//! Pattern 1: create the function somewhere to promote reusability
// then pass the function as a callback to addEventListener
const handleClick = () => {
    // somehow remove 'collapsed' from the form if collapsed
    // somehow add 'collapsed' to the form if NOT collapsed
    //! I def need a conditional (?)
    // if (form.className.includes('collapsed')) {
    //     form.className.replace('collapsed', ' ')
    // } else {
    //     form.className += ' collapsed'
    // }

    //! Using classList I am more efficient and I am not running the risk to override other classnames in there
    form.classList.toggle('collapsed')

}

const handleSubmit = (e) => {
    //! PLEASE DO NOT REFRESH THE PAGE, JS WILL HANDLE IT!
    e.preventDefault()
    //! Try to extract the values out of the form
    // const newTitle = document.querySelector('#form-title').value
    const newTitle = e.target.title.value //! given a form you can access its inputs by name property with .title if camelCase or ['title'] for more flexibility
    const newAuthor = document.querySelector('#form-author').value
    const newPrice = document.querySelector('#form-price').value
    const newImageUrl = document.querySelector('#form-imageUrl').value
    const newInventory = document.querySelector('#form-inventory').value

    if (!newTitle || !newAuthor) {
        alert("Title and author must be filled out!")
        return
    }
    //! What do we do with these values?? WE BUILD A NEW BOOK OBJ that matches the default implementation
    const newBook = {
        title: newTitle,
        author: newAuthor,
        price: newPrice,
        imageUrl: newImageUrl,
        inventory: newInventory,
    }

    //! Time to invoke the fn that displays a book on the page
    renderBook(newBook)

    //! If the submission worked, EMPTY THE FORM!!!!
    e.target.reset()
    // form.reset() equivalent but leveraging the global variable

}

//! Pattern 2: create the callback function in-place, make it anonymous, and 
// IF YOU WANT use an arrow function for readability.
toggleBtn.addEventListener('click', handleClick)
form.addEventListener('submit', handleSubmit)


// allDelBtns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         e.target.parentElement.remove()
//     })
// })


