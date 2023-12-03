const authMiddleware = (req, res, next)=>{
    console.log('Cookies: ', req.cookies)
    req.user= 'pepe'
}



module.exports = authMiddleware