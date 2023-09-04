require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const axios = require('axios')
const  getServices = require('./mockedData/getServices')
const getPortability = require('./mockedData/portabilityData')


const port = process.env.PORT || 8000
const app = express()


app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.get('/', async (req, res) =>{
  try {
    const response =  getServices
    console.log('response: ', response)
    res.json(response)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})
app.get('/portability', async (req, res) =>{
  try {
    const response =  getPortability
    // console.log('response: ', response)
    res.json(response)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})


app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`)
})