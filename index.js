const express = require("express")
const session = require("express-session")
const usersRouter = require("./users/user-router")

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())
server.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "keep it secret, keep it safe"
}))

server.use(usersRouter)


server.listen(port, () => {
    console.log(`Running on http://localhost:${port} ... `)
})