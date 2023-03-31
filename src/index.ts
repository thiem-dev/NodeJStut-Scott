import * as dotenv from 'dotenv'
dotenv.config() //grabs all env variables from .env

import config from './config'

import app from './server'

app.listen(config.port, () => {
    console.log(`hello on http://localhost:${config.port}`)
})