import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Logout = () => {

    const navigate=useNavigate()
      
    

    const logout = ()=>{
        localStorage.clear()
        toast('Session Expired ')
        navigate('/home')
    }

    const tokenExpTime = localStorage.getItem('tokenExpTime')
    const currentTime = Date.now()
    const timeRemaining = tokenExpTime - currentTime

 
    setTimeout(logout,timeRemaining)

  return (
    <div>

    </div>
  )
}

export default Logout