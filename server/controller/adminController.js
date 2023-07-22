const adminModel = require('../model/adminModel')
const requestModel = require('../model/requestModel')
const blogModel = require('../model/blogModel')
const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')

const adminRegister = async(req,res)=>{
    
    const dataObj={
        ...req.body,
        password:bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10))
    }
    const isUserExist = await adminModel.findOne({username:req.body.username})
    
    if(isUserExist){
        res.status(400).json({message:'Username already exists'})
        console.log('Username already exists')
    }
    else{
        adminModel(dataObj).save().then(()=>{
            res.status(200).json({message:'User registered successfully'})
            console.log("User registered successfully")
            req.flash('message','Registration successful')
        
        })
    
    }
}


const adminLogin = async(req,res)=>{

    const isUserExist = await adminModel.findOne({username:req.body.username})

    if(isUserExist){
        if(bcrypt.compareSync(req.body.password,isUserExist.password)){
            res.status(200).json({message:'You are logged in successfully'})
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

const viewBlogRequest = async(req,res)=>{
  try{
    let allRequest=await requestModel.find()
        res.render('viewRequests.ejs',{allRequest})
        // console.log(allRequest)
   
    // then((data)=>{
    //     res.status(200).json({message:'You have following blog requests pending',data:data})
        
    // }).catch((err)=>{
    //     res.status(400).json({message:'Unable to show blog requests',err})
    // })
    
  }
  catch(err){
    console.log(err)
    throw err
  }
}

const acceptReq = async(req,res)=>{
    try{
   let isBlogExist = await blogModel.findOne({requestId:req.params.id})
   if(isBlogExist ){
    if(isBlogExist.isAllowed == false){
        await blogModel.updateOne(
            {requestId:new mongoose.Types.ObjectId(req.params.id)},
            {
                $set:{
                    isAllowed:true
                }
            }
        )
        await requestModel.findOneAndUpdate(
            {_id : req.params.id},
            {
                $set:{
                    isAllowed:true
                }
            })
        res.redirect('/api/viewblogrequest')
        return 
    }
    else if(isBlogExist.isAllowed == true){
    console.log('Already accepted')
    res.redirect('/api/viewblogrequest')
    }
   }
   
   else{
        const data=await requestModel.findOneAndUpdate(
            {_id : new mongoose.Types.ObjectId(req.params.id)},
            {
                $set:{
                    isAllowed:true
                }
            },{
                new : true
            }).exec()
            console.log('new blog',data)
                const blogData = {
                    title:data.title,
                    author:data.author,
                    description:data.description,
                    userId:data.userId,
                    requestId:req.params.id,
                    isAllowed:data.isAllowed
                }
            const blogDetails=await blogModel.create(blogData)        
                if(blogDetails && blogDetails._id){
                console.log('Request accepted and added to blog model')
                res.redirect('/api/viewblogrequest')
                }
                else{
                    console.log('Blog has not been created')
                }
            } 
         
        }
        catch(err){
            res.status(400).json({err})
            console.log(err)
        }
    }
        
const rejectReq = async(req,res)=>{
    
    await requestModel.findOneAndUpdate(
        {_id : new mongoose.Types.ObjectId(req.params.id)},
        {
            $set:{
                isAllowed:false
            }
        },{
            new : true
        }).then(async()=>{
            await blogModel.findOneAndUpdate({
                requestId:new mongoose.Types.ObjectId(req.params.id)
        },{
            $set:{
                isAllowed:false
            }
        })
            res.redirect('/api/viewblogrequest')
        })
}


const test = async(req,res)=>{
    res.status(200).json({message:'Hello World'})
}



module.exports={adminRegister,adminLogin,viewBlogRequest,acceptReq,rejectReq,test}