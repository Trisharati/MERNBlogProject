import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../layouts/Navbar'

const PrivateRoute = (props) => {

    const {Component} = props
    const navigate = useNavigate()

    const logout = ()=>{
      localStorage.clear()
      navigate('/home')
  }

  const getExpTime = localStorage.getItem('tokenExpTime')
  const currentTime = Date.now()
  const timeRemaining = getExpTime - currentTime
  if(currentTime > getExpTime){
    logout()
  }
  else{
    setTimeout(logout,timeRemaining)
  }


    let token=localStorage.getItem('token')
    
    if(!token){
        <h3>Please login to your account</h3>
        console.log('Please login to your account')
        useEffect(()=>{
          navigate('/login')
          
        },[])
       
    }
    else{
      
      console.log('Token available')
    }

  return (
    <div>
        
        <Navbar/>
        <Component/>
    </div>
  )
}

export default PrivateRoute