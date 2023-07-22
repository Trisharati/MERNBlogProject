const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const userModel = require('../model/userModel')
const requestModel = require('../model/requestModel')
const blogModel = require('../model/blogModel')

const bcrypt = require('bcryptjs')

const userRegister = async(req,res)=>{
    
    
    

    const userObj={
        ...req.body,
        password:bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10))
    }
    
    const isUserExist = await userModel.findOne({username:req.body.username})
    
    if(isUserExist){
        res.status(400).json({message:'Username already exists'})
        console.log('Username already exists')
    }
    else{
      
        userModel(userObj).save().then(()=>{
            res.status(200).json({message:'User registered successfully',info:userObj})
            console.log("User registered successfully")
         
        
        })
    
    }
}


const userLogin = async(req,res)=>{

    const isUserExist = await userModel.findOne({username:req.body.username})

    if(isUserExist){
        if(bcrypt.compareSync(req.body.password,isUserExist.password)){
            const token = jwt.sign(req.body,'good')
            res.status(200).json({message:'You are logged in successfully',
            userId:isUserExist._id,
            token:token,
            picture:isUserExist.picture,
            username:isUserExist.username})
            console.log("You are logged in successfully")
           
        }
        else{
            res.status(400).json({message:'Wrong Password'})
            console.log("Wrong Password")
        }
    }
    else{
        res.status(400).json({message:'User is not registered'})
        console.log("User is not registered")
    }
}

const postBlog = async(req,res)=>{
    blogObj={
        ...req.body,
        userId:new mongoose.Types.ObjectId(req.params.id)
    }
    
    await requestModel(blogObj)
    .save()
    .then((data)=>{
        console.log('from post blog',data)
        res.status(200)
        .json({message:'Blog request sent successfully',title:req.body.title,requestId:data._id})
    }).catch((err)=>{
        res.status(400)
        .json({message:'Unable to send blog request',err})
    })
}


const viewBlogByUser = async(req,res)=>{
    await blogModel
    .find()
    .then((data)=>{
        res.status(200).json({message:'Following blogs are posted',blog:data})
    })
    .catch((err)=>{
        res.status(400).json({message:'Unable to show blogs',err})
    })
}

const loadParticularBlog=async(req,res)=>{
    blogModel.find(
        {_id:req.params.blogid})
        .then((data)=>{
            res.status(200).json(
                {
                    message:'Particular blog data',
                    blogData:data
                }
            )
        })
    
}


const updateBlog = async(req,res)=>{
    console.log('hello')
    blogModel.findOneAndUpdate({
        _id:new mongoose.Types.ObjectId(req.params.blogid)
    },
    {...req.body},
    {new:true})
    .then((data)=>{
        res.status(200).json({message:'Blog updated',updatedData:data})
    })
    .catch((err)=>{
        console.log(err)
    })
   
}







module.exports={userRegister,userLogin,postBlog,
    viewBlogByUser,updateBlog,loadParticularBlog}