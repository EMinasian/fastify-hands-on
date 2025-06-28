const fastify = require("fastify")({logger: true})

fastify.get('/health', (req, reply) => { 
  reply.send('Hello World!')
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