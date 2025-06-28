function healthRoutes(fastify, options, done) {
  fastify.get('/health', (req, reply) => { 
    reply.send('Hello World!')
  })
  done()
}

module.exports = healthRoutes