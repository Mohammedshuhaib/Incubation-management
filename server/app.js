const express = require('express')
const app = express() 
const mongoose = require('mongoose')
const db = mongoose.connection
const cors = require('cors')




let userRouter=require('./Routes/user')
let adminRouter = require('./Routes/admin')



app.use(cors())
app.use(express.json())



app.use('/', userRouter);
app.use('/admin',adminRouter)



try {
    mongoose.connect('mongodb://localhost:27017/incubationManagement')

    db.on('error', console.error.bind(console, 'connection error'));

    db.once('open', function () {
        console.log('Connected successfully');
    })
} catch (err) {
    console.log(err);
}



app.listen(9000,()=>{
    console.log("server started on port 9000");
})