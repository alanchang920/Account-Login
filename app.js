const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const checkUsers = require('./checkUsers')

const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const userInfo = checkUsers(req.body)
  const fault = 'Incorrect username or password.'
  const userInput = (req.body)

  if (userInfo.firstName !== undefined) {
    res.render('welcomePage', { userInfo: userInfo })
  } else {
    res.render('index', { userInput: userInput, fault: fault })
  }
})

app.listen(port, () => {
  console.log('App is running on http://localhost:3000')
})