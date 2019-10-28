// implement your API here
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('*', handleDefaultRequest)

function handleDefaultRequest(req, res) {
    res.json('boo')
}

app.listen(process.env.PORT || 5000, () => {
    console.log('listening on ' + (process.env.PORT || 5000))
})