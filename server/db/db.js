const config = require('../../knexfile').development
const db = require('knex')(config)
const utils = require('./utils')

function getBeers() {
  return db('beers')
  .then(beers => beers.map(utils.convertKeysSnakeCaseToCamelCase))
}

function getOneBeer(id) {
  return db('beers')
  .where('id', id)
  .first()
  .then(utils.convertKeysSnakeCaseToCamelCase)
}

function addToCart() {
  return db('beers')
}


// function removeFromCart() {

// }


// function updateQuantities() {

// }




module.exports = {
  getBeers,
  getOneBeer,
  addToCart,
  // removeFromCart,
  // updateQuantities,

}