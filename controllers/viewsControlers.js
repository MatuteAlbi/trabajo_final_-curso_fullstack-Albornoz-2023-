const login = (req,res)=>{
    res.render('pages/login')
}
const register = (req,res)=>{
    res.render('pages/register')
}

const home = (req,res)=>{
    if(req.user){
    res.render('pages/home')
}else{
    res.redirect('http://localhost:3000/login')
}
}












module.exports = {
    login : login,
    register : register,
    home: home,
}