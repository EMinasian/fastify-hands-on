const { getItems, getItem } = require('../controllers/items.js')

const itemsOptions = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            name: { type: 'string' }
          }
        }
      }
    }
  },
  // the callback can be set in handler of the options as well
  handler: getItems
}

function itemRoutes(fastify, options, done) {

  fastify.get('/items', itemsOptions)

  fastify.get('/item/:id', getItem)

  done()
}

module.exports = itemRoutes