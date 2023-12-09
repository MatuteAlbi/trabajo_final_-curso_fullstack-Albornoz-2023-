const login = (req,res)=>{
    res.render('pages/login')
}
const register = (req,res)=>{
    res.render('pages/register')
}

const home = (req,res)=>{
    if(req.user){
        //console.log('req.user.data.name: ' , req.user.data.name)
    res.render('pages/home',{user:req.user.data})
}else{
    
    res.redirect('http://localhost:3000/login')
}
}

const dashboard = (req,res)=>{
    res.render('pages/dashboard')
}



module.exports = {
    login : login,
    register : register,
    home: home,
    dashboard: dashboard
}