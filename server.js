const fastify = require("fastify")({logger: true})
const itemRoutes = require('./routes/items')
const healthgRoutes = require('./routes/health')


//We can register routes as plugins
fastify.register(healthgRoutes)
fastify.register(itemRoutes)

const start = async() => {
  fastify.listen({ port: 5000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
}

start()