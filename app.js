const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.port || 3000

const router = express.Router()

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
})

app.use('/api', router)

app.listen(port)

console.log('je suis sur le port'+port)

const mysql = require('mysql')

var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     :  process.env.DB_USER,
    password :  process.env.DB_PASS
  });

  connection.connect()

  