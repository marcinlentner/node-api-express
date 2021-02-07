/*
 * Create
 * Read
 * Update
 * Destroy
 */

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

// Create (get) - create new data
app.get('/user/new-user', (req, res) => {
  res.send('Success')
})

// CREATE - post
app.post('/user', (req, res) => {
  res.send('User Created')
})

// READ - get
app.get('/user', (req, res) => {
  res.send({ user_id: 3 })
})

// UPDATE - put
app.put('/user', (req, res) => {
  res.send('User Updated')
})

// DELETE - delete
app.delete('/user', (req, res) => {
  res.send('User Deleted')
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
