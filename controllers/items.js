const items = require("../mocks/items.json")
const uuidv4 = require('uuid').v4

const getItems = (req, reply) => {
  reply.send(items)
}

const getItem = (req, reply) => {
  const { id } = req.params
  const item = items.find(item => item.id === id)
  reply.send(item)
}

const addItem = (req, reply) => {
  const { name } = req.body
  const id = uuidv4()
  const item = { id, name }
  items.push(item)
  reply.code(201).send(item)
}

module.exports = { getItems, getItem, addItem }