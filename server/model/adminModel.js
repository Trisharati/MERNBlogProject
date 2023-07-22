const mongoose=require('mongoose')
const adminSchema = new mongoose.Schema({
    
    role:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        
    }    
},{
    timeStamps:true,
    versionKey:false
})

module.exports = new mongoose.model('admin',adminSchema)