const express = require('express')
const route = express.Router()
const viewsControlers = require('../controllers/viewsControlers')
const authMiddleware = require('../middlewares/auth')
const isAdmin = require('../middlewares/admin')

route.get('/login',viewsControlers.login)
route.get('/register',viewsControlers.register)
route.get('/',authMiddleware,viewsControlers.home)
route.get('/dashboard',authMiddleware,isAdmin,viewsControlers.dashboard)














module.exports = route