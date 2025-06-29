const { getItems, getItem, addItem } = require('../controllers/items.js')

const getItemsOptions = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' }
          }
        }
      }
    }
  },
  // the callback can be set in handler of the options as well
  handler: getItems
}

const postItemOptions = {
  schema: {
    response: {
      201: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' }
        }
      }
    }
  },
  // the callback can be set in handler of the options as well
  handler: addItem
}

function itemRoutes(fastify, options, done) {

  fastify.get('/items', getItemsOptions)
  fastify.get('/item/:id', getItem)
  fastify.post('/item', postItemOptions)

  done()
}

module.exports = itemRoutes