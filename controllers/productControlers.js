const Product = require('../models/productModels')


const newProduct = async (req,res)=>{

    try{
        const name = req.body.name
        const price = req.body.price
        const URLphoto = req.body.URLphoto
        if(name && price && URLphoto){
           await Product.create({
                name: name,
                URLphoto: URLphoto, 
                price: price,
            })
            
    
        }else{
            res.status(400).sed('Faltan Datos')
        }
        console.log("producto creado!")

    }catch(error){
        res.status(500).send(error)
    }


}

module.exports = {
    newProduct : newProduct,
}