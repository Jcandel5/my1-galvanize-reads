const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const queries = require('./queries')

app.use(bodyParser.json())
app.use(cors())
app.get('/', (req,res,next) => {
    queries.listAllData().then((data) => {
    res.json({data})
    })
})

app.listen(port , () => {
    console.log(`listening on port ${port}`)
})
