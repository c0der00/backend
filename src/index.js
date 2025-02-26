// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/index.js';

dotenv.config({
    path: './env',
})

const app = express();




connectDB()

















 //iefy fuction for immediate axecution
 /*
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONG0DB_URI}/${DB_NAME}`)
        app.on('error',(error) => {
            console.log('Error')
            throw error
        })
        app.listen(process.env.PORT,() => {
            console.log(`Server is running on port ${process.env.PORT}`)

        })
    } catch (error) {
        console.log(error);
        throw error        
    }
})()*/

