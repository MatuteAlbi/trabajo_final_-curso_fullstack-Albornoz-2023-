const Product = require('../models/productModels')

const create = async (req,res)=>{
    console.log ('create product',req.body)
    try{
        await Product.create({
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description
        })
        res.status(201).end()

    }catch(error){
        console.log('error:',error)
        res.status(500).end()
    }



}



const update =  async (req,res)=>{
    try{
        await Product.findByIdAndUpdate(req.body.productId,req.body)
        res.status(200).end()

    }catch(error){
        res.status(500).end()
    }
}

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
        const products = await Product.find()
        /*console.log('ProductControllers>Productos: ',products)*/
        res.status(200).json(products)
    }catch(error){
        res.status(500).end()
    }
    
}

module.exports = {
    create : create,
    update : update,
    remove : remove,
    get : get,

}