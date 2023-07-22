const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const path=require('path')
const app=express()
const cors=require('cors')


app.use(cors())


app.use(express.json())

app.set('view engine','ejs')
app.set('views','views')

app.use(express.urlencoded({extended:true}))

const router=require('./router')
app.use('/api',router)


app.use(express.static(path.join(__dirname, 'public')));




const port = process.env.PORT || 1900

mongoose.connect(process.env.DBDRIVER,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then((res)=>{
    app.listen(port,()=>{
        console.log('DB is connected')
        console.log(`http://localhost:${port}`)
    })
})
.catch((err)=>{
    console.log(err)
})