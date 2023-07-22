const mongoose=require('mongoose')
const blogSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId
    },
    requestId:{
        type:mongoose.Schema.Types.ObjectId  
    },
    isAllowed:{
        type:Boolean
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
    }
   
},{
    timeStamps:true,
    versionKey:false
})

module.exports = new mongoose.model('blog',blogSchema)