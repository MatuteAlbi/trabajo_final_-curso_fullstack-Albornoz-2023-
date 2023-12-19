const express = require('express')
const route = express.Router()
const cartsControllers = require('../controllers/cartsControllers')
const auth = require('../middlewares/auth')
const isAdmin = require('../middlewares/admin')

//route.get('/',auth,cartsControllers.get)
//route.post('/',auth,isAdmin,cartsControllers.create)
route.put('/',auth,cartsControllers.update)
//route.delete('/',auth,isAdmin,cartsControllers.remove)












module.exports = route