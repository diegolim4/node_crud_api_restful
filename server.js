/*
 * Arquivo: server.js
 * Description: 
 * author: Diego Lima
 * Data da criação: 27/08/2021 
 */


const express = require('express')
const app = express
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


const port = process.env.port || 5000

