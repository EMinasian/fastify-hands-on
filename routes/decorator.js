function decoratorRoutes(fastify, options, done) {

  fastify.get('/decorator', (req, reply) => { 

    let valueFromObj, valueFromFunction

    if (fastify.hasDecorator('exampleObject')) {
      valueFromObj = fastify.exampleObject
    }

    if (fastify.hasDecorator('exampleFunction')) {
      valueFromFunction = fastify.exampleFunction()
    }

    reply.send({ valueFromFunction, valueFromObj })
  })
  done()
}

module.exports = decoratorRoutes