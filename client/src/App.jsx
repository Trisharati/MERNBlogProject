
// import './App.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Reg from './components/Reg.jsx'
import Login from './components/Login.jsx'
import Navbar from './layouts/Navbar.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import Dashboard from './components/Dashboard.jsx'
import Blog from './components/Blog.jsx'
import EditBlog from './components/EditBlog.jsx'
import EditCheck from './components/EditCheck.jsx'
import First from './components/First'
import Logout from './components/Logout.jsx'

import { useState,useEffect } from 'react'




function App() {
  
  const [showFirstComponent,setShowFirstComponent] = useState(true)
  
  
  const handleSignUp=()=>{
    setShowFirstComponent(false)
    
  }




  return (
    <>
    <ToastContainer />
    <Router>
    
      
      <Routes>
      {showFirstComponent  && 
        <Route path='/' element={<First onSignUp={handleSignUp}/>}/>}
        <Route path='/home' element={<First/>}/>
        <Route path='/register' element={<Reg/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<PrivateRoute Component={Dashboard}/>}/>
        <Route path='/loadblog/:blogid' element={<EditCheck Component={EditBlog}/>}/>
        <Route path='/blog' element={<PrivateRoute Component={Blog}/>}/>
        <Route path='/logout' element={<Logout/>}/>
        
        </Routes>
        
    </Router>
    </>
  )
}

export default App
