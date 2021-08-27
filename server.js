/*
 * Arquivo: server.js
 * Description: 
 * author: Diego Lima
 * Data da criação: 27/08/2021 
 */


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const mongoose = require('mongoos e')
const Produto = require('./models/products')
const products = require('./models/products')


// mongoose.connect('mongodb+srv://dlima:diilima@apicrud.rguo7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// instância da rota via express
const router = express.Router();

router.use((req, res, next)=>{
    console.log('houve mudanças...')
})


router.get('/', (req, res)=>{    
    res.json({message: 'Opa..'})
})

// método POST: Criar Produtos 
router.route('/produto')
    .post((req, res)=>{
        var products = new Produto()
        
        products.nome = req.body.nome
        products.preco = req.body.preco
        products.descricao = req.body.descricao

        products.save((error)=>{
            if(error)
                res.send('Erro ao salvar o produto: '+ error)
            res.json({message: 'Produto cadastrado com sucesso!'})
        })
    })
// método GET: pegar Produtos
 .get((req, res)=>{
     products.find((error, products)=>{
         if(error)
            res.send('Erro ao tentar selecionar todos os produtos: '+error)
     })
 })   

// rota da api
app.use('/api', router)

const port = process.env.port || 5000
app.listen(port,()=>{
    console.log('Rodando no http://localhost:'+port)
})

