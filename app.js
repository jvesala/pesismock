var express = require('express')
var bodyParser = require('body-parser')
var schedule = require('node-schedule')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
var port = 5000
app.set('port', (process.env.PORT || port))

var game = 'pesislive-2017-02-19-veto-jymyjussit'
var index = 1

app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/api/status', function (req, res) {
  var path = __dirname + '/static/' + game + '/status-' + index + '.json'
  console.log("Returning state: " + path)
  res.sendFile(path)
})

app.post('/api/index', function(req, res){
  console.log("Setting index to " + req.body.index)
  index = req.body.index
  res.send( '{"status": "ok", "index": ' + index + '}' )
})

var j = schedule.scheduleJob('* * * * * *', function() {
  index = index + 1
  if (index > 1119) {
    index = 1
  }
})

app.listen(app.get('port'), function () {
  console.log('PesisMock started on port ' + port)
})
