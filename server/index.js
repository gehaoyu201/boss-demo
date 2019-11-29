const express = require('express')
const app = express()


app.use(express.json())
app.use(require('cors')())
app.use('/', express.static(__dirname + '/web'))
app.use('/web', express.static(__dirname + '/web'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/uploads', express.static(__dirname + '/./uploads'))
require('./db/db')(app)
require('./router')(app)


app.listen(3000, () => {
    console.log("http:localhost:3000")
})