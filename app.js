const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const viewsRouter = require('./routers/viewsRoutes')
const userRoutes = require('./routers/userRoutes')



const app = express()
const port = 3000
//>MIDLEWARES<
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())
app.set('view engine', 'ejs')

//>RUTAS<
app.use('/',viewsRouter)

//>RUTAS de RECURSOS<
app.use('/api/user/',userRoutes)



app.listen(port, async () =>{
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/Trabajo_Final');
    console.log(`Example app listening on port ${port}`)

  }catch(error){
      console.log('Error to connect mongoDB',error)
  }

})