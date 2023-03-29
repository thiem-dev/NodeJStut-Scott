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






app.get('/', (req, res) => {
    console.log('hello from express');
    res.status(200);
    res.json({message: 'hello'});
})

//protect is authorization middle ware using JWT secrets/sign
app.use('/api', protect, router)

app.use('/user', createNewUser)
app.use('/signin', signin)


export default app;