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

// Execute next controller with the same route
app.get('/user', (req, res, next) => {
  // res.send({ user_id: 1 })
  next()
})

app.get('/user', (req, res) => {
  res.send({ user_id: 2 })
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
