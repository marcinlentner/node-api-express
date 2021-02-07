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

// send 404 in response
app.get('/shop', (req, res) => {
  res.status(404).send("Sorry, can't find that.")
})

// send html in response to get request, console log IP
app.get('/about', (req, res) => {
  console.log(req.ip)
  res.send('<h1>This is about page</h1>')
})

// send json object in response
app.get('/contact', (req, res) => {
  res.send({ some: 'json' })
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
