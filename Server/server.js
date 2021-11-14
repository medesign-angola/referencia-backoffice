const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000
const api = require('./router-api/api');
const app = express()

app.use(bodyParser.json())
app.use('/api', api)
app.use('/login', api)


app.get('/', function(req, resp){
    resp.send("Hello from server")
})

app.listen(PORT, function(){
    console.log('Servidor está a rodar na porta: '+PORT);
})