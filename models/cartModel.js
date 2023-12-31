const mongoose = require('mongoose')
const User = require('./userModels')
const Products = require('./productModels')


const cartSchema = new mongoose.Schema({ 
    userId: mongoose.Types.ObjectId,
    products:{
        type:[mongoose.Types.ObjectId],
        require: false
    },
});

const Cart = mongoose.model('cart', cartSchema);


module.exports = Cart