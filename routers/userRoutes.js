const express = require('express')
const route = express.Router()
const userControlers = require('../controllers/userControlers')

route.post('/login',userControlers.login)
route.post('/register',userControlers.register)














module.exports = route