
const baseUrl = 'http://localhost:3000/beers'

function getFetch() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(beerData => console.log(beerData))
}

getFetch()

