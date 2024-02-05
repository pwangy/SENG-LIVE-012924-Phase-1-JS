function getJSON(url) {
  return fetch(url)
  .then(response => {
    if (response.ok) { // 200-299
      return response.json()
    } else {
      throw (response.statusText)
    }
  })
}

//! Differences between GET and POST fetch requests
//* 1. Additional info is needed like the method for example (default is GET)
//* 2. contents of the POST you’re adding to the db

function postJSON(url, data) {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }
  return fetch(url, configObj)
  .then(resp => {
    if (resp.ok) {
      return resp.json()
    } else {
      throw (resp.statusText)
    }
  })
  .catch(err => console.log(err))
  //! the fn returns a promise obj so that anywhere in your code you can use a then
}
