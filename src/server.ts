import express from 'express'
import router from './router'
import morgan from 'morgan'

const express = require('express');

const app = express();

app.use(morgan('dev'))

app.get('/', (req,res) => {
    console.log('hello from express');
    res.status(200);
    res.json({message: 'hello'});
})

app.use('/api', router)

export default app;