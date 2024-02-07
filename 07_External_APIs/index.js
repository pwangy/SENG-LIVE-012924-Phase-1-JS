//! GLOBALS SECTION
const url = 'https://api.tvmaze.com/search/shows?q='
const form = document.querySelector('#search-form')
const showNameInput = document.querySelector('#show-name')
const results = document.querySelector('#results')
const titleSpotlight = document.querySelector('#show-details-name')
const imageSpotlight = document.querySelector('#show-details-image')
const paragraphSpotlight = document.querySelector('#show-details-description')
const ratingSpotlight = document.querySelector('#show-details-rating')


//! Helpers
const displayShowDetails = (showData) => {
    titleSpotlight.innerText = showData.show.name
    imageSpotlight.src = showData.show.image.medium
    imageSpotlight.alt = showData.show.name
    paragraphSpotlight.innerText = showData.show.summary.replaceAll('<p>', '').replaceAll('</p>', '')
    ratingSpotlight.innerText = `Rating: ${showData.show.rating.average}/10`
}

const displayShow = (showData) => {
    //! create a parent container (grey bar in mockup)
    
    const container = document.createElement('div')
    //! insert inside the show name, a detail, and a button
    const h3 = document.createElement('h3')
    h3.innerText = showData.show.name
    h3.className = 'result-show-name'
    const span = document.createElement('span')
    span.innerText = showData.show.network.name
    const button = document.createElement('button')
    button.innerText = 'Details'
    button.addEventListener('click', () => displayShowDetails(showData))
    //! append show name, a detail, and a button inside the container
    container.append(h3, span, button)
    //! put the container into the DOM
    results.append(container)
}

const handleSubmit = (e) => {
    e.preventDefault()
    //! try to extract what the user typed out of the input
    const queryParam = showNameInput.value
    //! use the query to fire a fetch call to the api
    fetch(`${url}${queryParam}`)
    .then(resp => resp.json())
    .then(data => data.forEach(show => displayShow(show)))
    //! pray that data comes back and strategize on how to use it
    //! empty the form
    e.target.reset()
}

//! Attach Listeners


form.addEventListener('submit', handleSubmit)