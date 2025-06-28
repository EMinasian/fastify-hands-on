const items = require("../mocks/items.json")

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
  }
}

function itemRoutes(fastify, options, done) {

  fastify.get('/items', itemsOptions, (req, reply) => {
    reply.send(items)
  })

  fastify.get('/item/:id', (req, reply) => {
    const { id } = req.params
    const item = items.find(item => item.id === Number(id))
    reply.send(item)
  })

  done()
}

module.exports = itemRoutes