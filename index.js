const path = require('node:path')
const livereload = require("livereload")
const connectLivereload = require("connect-livereload")

const liveReloadServer = livereload.createServer()
const express = require('express')
const app = express()

liveReloadServer.watch(path.join(__dirname, 'public'))
app.use(connectLivereload())
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/public/" + "index.html");
})
app.use(express.static('public'))

const server = app.listen(8081,  () => {
   const host = server.address().address
   const port = server.address().port
   
   console.log("Server listening at http://%s:%s", host, port)
})
