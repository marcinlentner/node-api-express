import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
// create Router
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// create a sub route
router.get('/about', (req, res) => {
  res.send({ message: 'Router creation' })
})

// connect sub route to main ROOT route
app.use('/api', router)

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
