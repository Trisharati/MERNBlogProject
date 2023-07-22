const mongoose=require('mongoose')
const reqSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    isAllowed:{
        type:Boolean,
        default:false
    }
},{
    timeStamps:true,
    versionKey:false
})

module.exports = new mongoose.model('request',reqSchema)