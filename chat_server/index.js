const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const cors = require('cors')

app.use(cors())

let users = 0

io.on('connection', (socket) => {
    users++
    let user = "user" + users
    console.log('user connected')
    io.emit('user', user)
    socket.on('message', (msg) => {
        console.log('message: ' + msg)
        io.emit('message', [msg[0],msg[1]])
    })
})

http.listen(3000, () => console.log('listening on 3000'))