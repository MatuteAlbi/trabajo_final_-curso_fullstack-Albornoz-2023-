const userUtils = require('../utils/userUtils')

const isAdmin = (req,res,next)=>{
    //console.log('req.user: ',req.user)
  if(req.user.data.IsAdmin){
    next()
  }else{
    res.redirect('http://localhost:3000/')
  }
}



module.exports = isAdmin