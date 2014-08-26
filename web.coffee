gzippo = require 'gzippo'
express = require 'express'
# subscribers = require './subscribers'

app = express()
app.use gzippo.staticGzip "#{__dirname}/dist"
app.listen process.env.PORT || 5000

# app.get '/', (req,res) ->
#   res.sendfile('dist/index.html')
#
# app.post '/subscribe', (req,res) ->
#   console.log 'i received this email', req.body
#   res.send(JSON.stringify(req.body)+'\n')
#
# app.get '/thanks', (req,res) ->
#   res.sendfile('dist/thanks.html')
