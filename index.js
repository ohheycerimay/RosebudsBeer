
const baseUrl = 'http://localhost:3000/beers'

function getFetch() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(beers=> rendersBeers(beers))
}

//getFetch()
function rendersBeers(beers) {
beers.forEach(beer => rendersBeers(beer))
}

//function 

