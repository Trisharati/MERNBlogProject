import React,{useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { viewBlogs } from '../redux/FormSlice'
import Navbar from '../layouts/Navbar'
import { toast } from 'react-toastify';

const EditCheck = (props) => {

    const {Component} = props

    const navigate = useNavigate()

    const userloggedIn=localStorage.getItem('userId')
    
    const {blogid} = useParams()
    const dispatch = useDispatch()
    
    useEffect(()=>{
      
    dispatch(viewBlogs())
    .then((data)=>{
    for(let x in data.payload){
        if(data.payload[x]._id === blogid){
            if(userloggedIn !== data.payload[x].userId){
                console.log('You are not authorised to edit')
                toast.warning('Only owner can edit')
                navigate('/dashboard')
            }
        }
    }
})
       
    },[])
    
    
    
 
    return (

   
    <div>EditCheck
       <Navbar/>
       <Component/>

    </div>
  )
}

export default EditCheck