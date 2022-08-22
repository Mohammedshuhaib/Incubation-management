const mongoose =require('mongoose')
const ObjectId = mongoose.Types.ObjectId



const Admin=new mongoose.Schema({
    // name : {type:String, required:true},
    email :{type : String , required : true,unique : true},
    password : { type : String , required : true},
},
{
    collection : 'admin'
} )

const model = mongoose.model('admin',Admin)

module.exports=model