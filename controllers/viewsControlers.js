const Product = require('../models/productModels')
const Cart = require('../models/cartModel')


const login = (req,res)=>{
    res.render('pages/login')
}
const register = (req,res)=>{
    res.render('pages/register')
}

const home = async (req,res)=>{
    
        const products = await Product.find({})
        const shoppingCart = await Cart.findOne({userId:req.user.data._id})
        if(req.user){
    res.render('pages/home',{user:req.user.data,products:products,cart:shoppingCart.products})
}else{
    res.redirect('http://localhost:3000/login')
}
}

const dashboard = (req,res)=>{
    res.render('pages/dashboard')
}

const cart = async (req,res)=>{
    const shoppingCart = await Cart.findOne({userId:req.user.data._id})
    const promises = []
    shoppingCart.products.forEach((id)=>{
        const promise = Product.findById(id)
        //console.log('Promise: ', promise)
        promises.push(promise)
    })
    await Promise.all(promises).then((products)=>{
        //console.log('products: ',products)
        //console.log('promise: ',promises)
        res.render('pages/shoppingCart',{products:products,user:req.user.data})
    })
 
}



module.exports = {
    login : login,
    register : register,
    home: home,
    dashboard: dashboard,
    cart:cart,
}