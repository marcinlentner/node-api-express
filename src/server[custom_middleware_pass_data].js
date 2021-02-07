import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// custom Middleware
const log = (req, res, next) => {
  console.log('logging')
  req.data = 'data from middleware' // use for passing data
  next()
}

// run custom Middleware only for this route
app.get('/data', log, (req, res) => {
  res.send({ data: req.data }) // do something with the data
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
