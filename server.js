const fastify = require("fastify")({logger: true})
const itemRoutes = require('./routes/items')
const healthgRoutes = require('./routes/health')
const decoratorRoutes = require('./routes/decorator')

//We can register routes as plugins
fastify.register(healthgRoutes)
fastify.register(itemRoutes)
fastify.register(decoratorRoutes)

fastify.decorate('exampleFunction', () => {
  return 'the example decorator function'
})

fastify.decorate('exampleObject', {
  message: 'the example decorator object'
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