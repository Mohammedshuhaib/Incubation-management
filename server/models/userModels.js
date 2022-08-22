const mongoose =require('mongoose')
const ObjectId = mongoose.Types.ObjectId



const User=new mongoose.Schema({
    name : {type:String, required:true},
    email :{type : String , required : true,unique : true},
    password : { type : String , required : true},
    isSubmitted :{type : Boolean}
},
{
    collection : 'user'
} )

const model = mongoose.model('user',User)

module.exports=model