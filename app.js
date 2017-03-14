var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
var port = 5000
app.set('port', (process.env.PORT || port))

var index = 0

app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/api/index', function(req, res){
  console.log("Setting index to " + req.body.index)
  index = req.body.index
  res.send( '{"status": "ok", "index": ' + index + '}' )
})

app.listen(app.get('port'), function () {
  console.log('PesisMock started on port ' + port)
})
