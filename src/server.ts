import express from 'express'
import router from './router'
import morgan from 'morgan'
import { protect } from './modules/auth'
import { createNewUser, signin } from './handlers/user'

const express = require('express');

const app = express();

app.use(morgan('dev'))
app.use(express.json()) //puts together json sent to server
app.use(express.urlencoded({extended: true})) //gets variables off url query strings






app.get('/', (req, res, next) => {
    res.json({message: 'hello'})
})

//protect is authorization middle ware using JWT secrets/sign
app.use('/api', protect, router)

app.use('/user', createNewUser)
app.use('/signin', signin)

app.use((err, req, res, next) => {
    if (err.type === 'auth'){
        res.status(401).json({message: 'unauthorized'})
    } else if (err.type === 'input'){
        res.status(400).json({message: 'invalid input'})
    } else {
        res.status(500).json({message: "oops we messed something up. Code monkeys have been deployed"})
    }
})


export default app;