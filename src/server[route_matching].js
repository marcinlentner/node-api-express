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

// exact match
app.get('/about', (req, res) => {
  res.send({ message: 'exact match' })
})

// Regex match
app.get('/postcode/([a-z]{2}[0-9]{2,3}[a-z]{2})', (req, res) => {
  res.send({ message: 'regex match' })
})

// glob match
app.get('/wp-*', (req, res) => {
  res.send({ message: 'glob match' })
})

// parameter match
app.get('/user/:id', (req, res) => {
  res.send({ message: 'parameter match' })
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
