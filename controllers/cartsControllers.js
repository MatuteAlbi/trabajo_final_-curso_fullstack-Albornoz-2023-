const Cart = require('../models/cartModel')
const Product = require('../models/productModels')

const update =  async (req,res)=>{
    try{
        console.log('req.user._id:',req.user.data._id)
        const cart = await Cart.findOne({userId:req.user.data._id})
        console.log('cart: ',cart)
        cart.products.push(req.body.productId)
        cart.save()
        res.status(200).end()

    }catch(error){
        res.status(500).end()
    }
}





/*



const remove = async (req,res)=>{
    const idDatabaseProduct = 
    console.log('req.body.productId: ',req.body.productId)
    try{
        await Product.deleteOne({_id:req.body.productId})
        res.status(200).end()

    }catch(error){
        res.status(500).end()
    }
}


const get = async (req,res)=>{
    try{
        const cart = await Cart.find({userId:req.user._id})
        res.status(200).json(cart)
    }catch(error){
        res.status(500).end()
    }
    
}
*/
module.exports = {
    //create : create,
    update : update,
    //remove : remove,
    //get : get,

}

