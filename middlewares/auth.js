const userUtils = require('../utils/userUtils')

const authMiddleware = (req, res, next)=>{
    if(req.cookies.token){
    const token = req.cookies.token
    const user = userUtils.validateToken(token)
    
        req.user = user
        next()
    }
    else{
       res.redirect('htt://localhost:3000/login') 
    }
  
}



module.exports = authMiddleware