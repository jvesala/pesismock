var express = require('express')
var app = express()
var port = 5000
app.set('port', (process.env.PORT || port))

app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(app.get('port'), function () {
  console.log('PesisMock started on port ' + port)
})
