gzippo = require 'gzippo'
express = require 'express'
bodyParser = require 'body-parser'
fs = require 'fs'

file = "#{__dirname}/subscribers.json"

app = express()
app.use bodyParser.urlencoded({ extended: false })
app.use gzippo.staticGzip "#{__dirname}/dist"
app.listen process.env.PORT || 5000

app.get '/subscribers', (req,res) ->
  fs.readFile file, 'utf8', (err, data) ->
    if (err)
      console.log('Error: ' + err)
      return

    data = JSON.parse(data)
    res.status(200).send(JSON.stringify(data)+'\n')
    return
  {}


app.post '/subscribe', (req,res) ->
  fs.readFile file, 'utf8', (err, data) ->
    if (err)
      console.log('Error: ' + err)
      return

    data = JSON.parse(data)
    unless req.body.email in data.emails
      data.emails.push req.body.email
    else
      res.status(200).send("You've already subscribed!")

    fs.writeFile file, JSON.stringify(data, null, 4), (err) ->
      if err
        console.log(err)
        res.status(500).send("Oups something went wrong while saving")
      else
        res.sendfile('dist/thanks.html')


app.get '*', (req,res) ->
  res.sendfile('dist/404.html')
