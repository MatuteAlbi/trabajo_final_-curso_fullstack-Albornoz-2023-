const User = require('../models/userModels')
const userUtils = require('../utils/userUtils')


const login = async (req,res)=>{
    try{
        const email = req.body.email
        const password = req.body.password
        const user = await User.findOne({email: email})
        const matchPass = userUtils.comparePasswords(password,user.password, user.salt )
        if (matchPass){
            const token = userUtils.createToken(user)
            res.status(200).send(token)
        }else{
            res.status(400).send('  password no match')
        }
    
    }catch(error){
        res.status(500).send(error)
    }



}
const register = async (req,res)=>{

    try{
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const URLphoto = req.body.URLphoto
        if(email && password && URLphoto){
            const hashSalt = userUtils.createHashAndSalt(password)
           await User.create({
                name: name,
                email: email,
                password: hashSalt.hash,
                salt: hashSalt.salt,
                URLphoto: URLphoto, 
                IsAdmin: false,
    
            })
            
    
        }else{
            res.status(400).sed('Faltan Datos')
        }

    }catch(error){
        res.status(500).send(error)
    }


}



module.exports = {
    login : login,
    register : register,
}