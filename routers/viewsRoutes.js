const express = require('express')
const route = express.Router()
const viewsControlers = require('../controllers/viewsControlers')
const authMiddleware = require('../middlewares/auth')

route.get('/login',viewsControlers.login)
route.get('/register',viewsControlers.register)
route.get('/',/*authMiddleware*/viewsControlers.home)














module.exports = route