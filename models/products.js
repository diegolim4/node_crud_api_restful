const mongoose = require('mongoose')

const Schema = mongoose.Schema


const ProdutoSchema = new Schema({
    nome: String,
    preço: Number,
    descricao: String
})

module.exports = mongoose.Mongoose.model('produto', ProdutoSchema )