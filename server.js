/*
 * Arquivo: server.js
 * Description: 
 * author: Diego Lima
 * Data da criação: 27/08/2021 
 */


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Produto = require('./models/products')

mongoose.connect('mongodb+srv://diegolima:<password>@apicrud.rguo7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// instância da rota via express
const router = express.Router();

router.get('/', (req, res)=>{    
    res.json({message: 'Opa..'})
})

// rota da api
app.use('/api', router)

const port = process.env.port || 5000
app.listen(port,()=>{
    console.log('Rodando no http://localhost:'+port)
})

