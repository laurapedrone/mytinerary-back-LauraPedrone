import 'dotenv/config.js'
import express  from "express"
import indexRouter from "./router/indexRouter.js"
import cors from "cors"
import './config/database.js'
import errorHandler from './middleware/errorHandler.js'
import notFoundError from './middleware/notFoundHandler.js'

const server = express()

server.use(cors())
server.use(express.json())

server.use('/api',indexRouter)

server.use('/api/',(req,res,next)=>{
    console.log('Hicieron una petición a mi backend a la ruta', req.url, 'a la hora:',new Date().toLocaleString())
    console.log(req.method)
    next()
}, indexRouter )

server.get('/',(request, response, next)=>{
    response.send('Bienvenidos a mi servidor')
})

server.use(errorHandler)
server.use(notFoundError)

server.listen(process.env['PORT'], ()=>{console.log('Servidor corriendo en puerto ' + process.env['PORT'])})