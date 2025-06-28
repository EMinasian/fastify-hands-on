const fastify = require("fastify")({logger: true})
const items = require("./mocks/items.json")

fastify.get('/health', (req, reply) => { 
  reply.send('Hello World!')
})

fastify.get('/items', (req, reply) => {
  reply.send(items)
})

fastify.get('/item/:id', (req, reply) => {
  const { id } = req.params
  const item = items.find(item => item.id === Number(id))
  reply.send(item)
})

const start = async() => {
  fastify.listen({ port: 5000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
}

start()