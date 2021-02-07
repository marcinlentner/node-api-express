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
  next() // execute next middleware in order (can be passed in argument)
}

// run custom Middleware for entire app
app.use(log)

// run custom Middleware only for this route
app.get('/data', log, (req, res) => {
  res.send({ data: [1, 2, 3] })
})

// run custom Middleware in order
app.post('/data', [log, log, log], (req, res) => {
  console.log(req.body)
  res.send({ ok: true })
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
