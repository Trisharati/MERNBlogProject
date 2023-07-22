import axios from 'axios'

const url='https://blog-project-yqj5.onrender.com/api'

export const register=async(input)=> await axios.post(`${url}/userregister`,input)
.then((res)=>{
    const info = res.data.info
    console.log(info)
    if(info){
    return info
    }
    else{
        console.log('Unable to get info about user')
    }
}).catch((err)=>{
    console.log(err)
})


export const login=async(input)=>await axios.post(`${url}/userlogin`,input)
.then((res)=>{
    const token = res.data.token
    localStorage.setItem('token',token) 
    const token1=localStorage.getItem('token')
    const userId = res.data.userId
    localStorage.setItem('userId',userId)
    const picture = res.data.picture
    localStorage.setItem('picture',picture)
    const username = res.data.username
    localStorage.setItem('username',username)
if(token1){
    return username
}    
else{
    console.log('Unable to go to dashboard')
}
})

export const postblog=async(input,userId)=>await axios.post(`${url}/postblog/${userId}`,input)
.then((res)=>{
    
if(res.data.title){
    return res.data.title
}    
else{
    console.log('Unable to send blog creation request')
}
})

export const viewblog = async()=>await axios.get(`${url}/viewblogbyuser`)
.then((res)=>{
    
   
    let arr=[]
        for(let x in res.data.blog){
         
         if (res.data.blog[x].isAllowed == true) {
            arr.push(res.data.blog[x])     
         }
         else if(res.data.blog[x].isAllowed == false){
            arr.splice(x,1)
         }
         else{
            console.log('Unable to fetch data')
         }
        }
        
            return arr 
        
    })
       
 
export const loadblog = async(blogid)=>await axios.get(`${url}/loadblog/${blogid}`)
    .then((res)=>{
        return res.data.blogData
    })    
    

export const updateblog = async(input,blogid)=>axios.put(`${url}/updateblog/${blogid}`,input)
.then((res)=>{
    return res.data.updatedData
}).catch((err)=>{
    console.log('Error in updating blog',err)
})