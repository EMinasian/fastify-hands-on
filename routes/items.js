const items = require("../mocks/items.json")

function itemRoutes(fastify, options, done) {

  fastify.get('/items', (req, reply) => {
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