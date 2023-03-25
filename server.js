const jsonServer = require("json-server")
const server = jsonServer.create()
const middleware = jsonServer.defaults()

const router = jsonServer.router("db.json")

server.use(middleware)
server.use(router)

server.listen("3000", () => console.log("SERVER LISTEN IN PORT 3000"))

module.exports = server

