//Data 

const inventory = [
  {
    id: 1,
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Marjin Haverbeke',
    price: 10.00,
    reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
    inventory: 10,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
  },
  {
    id: 2,
    title: 'JavaScript & JQuery: Interactive Front-End Web Development',
    author: 'Jon Duckett',
    price: 45.75,
    reviews: [{userID: 15, content:'good way to learn JQuery'}],
    inventory: 2,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
  },
  {
    id: 3,
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    price: 36.00,
    reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
    inventory: 8,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
  },
  {
    id: 4,
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    price: 25.50,
    reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
    inventory: 0,
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
  },
  {
    id: 5,
    title: 'You Don\’t Know JS',
    author: 'Kyle Simpson',
    price: 6.00,
    reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
    inventory: 7,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
  }, 
  {
    id: 6,
    title: 'Learn Enough JavaScript to Be Dangerous',
    author: 'Michael Hartl',
    price: 24.00,
    reviews: [{userID: 50, content:'pretty good'}],
    inventory: 5,
    imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'
  },
  {
    id: 7,
    title: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann McDowell',
    price: 49.95,
    reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID: 20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
    inventory: 20,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
  }
]

// ✅ Function ideas:
/*
create a formatPrice(price) function that accepts a price (number) as an argument 
and returns the price formatted as a string. formatPrice(10) => '$10.00'
*/
// Function Declaration
function formatPrice(price) { // signature line
  return `$${price.toFixed(2)}`
}


// Start here!

//! 💡 Arrow functions vs regular functions

// ✅ create an arrow function EXPRESSION version of the formatPrice function
const formatPrice2 = (price) => { // signature line
  return `$${price.toFixed(2)}`
}
// console.log(formatPrice(29))

const formatPrice3 = (price) => `$${price.toFixed(2)}` // inline immediate return
console.log(this)

// 1. Readability / Conciseness
// 2. Immediate Implicit Return when staying inline without {}
// 3. Does not get hoisted (lifted up to the top of their scope during the creation phase)
// 4. Different value for 'this'


// ✅ create a blurb() function that accepts a book as an argument and logs a message in the following format:
// 'Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke is on sale for $10.00'

//! 💡 Scope
// 1. Global (aka anything outside of a function, loop, in general body {})
// 2. Local - Functional
// 3. Block -> let & const -> have a smaller scope than var

scopey()
function scopey() { // all fn declarations get hoisted
    //! Define four local/functional variables (available anywhere within the function FROM THIS LINE UNDER ⚠️)
    var a = "first Value"; // functional scope
    let b = "first Value"; // block scope
    const c = "first Value"; // block scope
    d = "The worst evil one" // functional scope
  
    if (true) {
    //! Define four block-scoped variables (only available within the block)
      var a = "second Value";
      let b = "second Value";
      const c = "second Value";
      d = 'second value'
    }
    
    // what will each statement log to the console?
    console.log("a (var) is,", a);
    console.log("b (let) is,", b);
    console.log("c (const) is,", c);
    console.log("d (evil global) is,", d);
}

// After Break

// calculateTotal is called a Higher Order Function
// applyDiscount is a fn passed in as argument to another fn and its execution is delayed in time -> CALLBACK
function calculateTotal(total, applyDiscount) {
  total - applyDiscount(total)
}
// calculateTotal2 is called a Higher Order Function
// CLOSURE - is a fn passed in as argument to another function and later exposed/returned. This allows the closure to keep a memory of the entire lexical scope!

function calculateTotal2(total, applyDiscount) {
  console.log(total - applyDiscount(total))
  let test = "test"
  return applyDiscount
}

let returnedFn = calculateTotal2(22, () => {})
returnedFn()

//! 💡 Practice using callbacks for iteration
// forEach, map, filter, find

//! 💡 When do I use forEach vs map?

//! forEach -> does not care about returning but rather doing/creating/printing and returns undefined
inventory.forEach(function(currentBook){
    console.log(currentBook)
})

//! map -> I need to create a new array, populate it and then return it. DO NOT FORGET TO RETURN SOMETHING INSIDE THE CALLBACK BODY

inventory.map(function(currentBook){
    console.log(currentBook.title)
})

//! Create the callback in the global scope and then pass a reference to whoever needs it
function reuseMe(currentBook){
    return currentBook.title
}

inventory.map(reuseMe)


//! Alternative to map with for loop
const finalArray = [];
for(let i = 0; i < inventory.length; i++) {
    finalArray.push(inventory[i].title)
}
