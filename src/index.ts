import * as dotenv from 'dotenv'
dotenv.config() //grabs all env variables from .env


import app from './server'

app.listen(3001, () => {
    console.log('hello on http://localhost:3001')
})