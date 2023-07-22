import React,{useState} from 'react'
import { registration } from '../redux/FormSlice'
import {useDispatch} from 'react-redux'



import { useNavigate } from 'react-router-dom'



const Reg = () => {
            

  
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    

  const navigate=useNavigate()
  const [input,setInput] = useState({
    
  })
const {username,password} = input



const dispatch = useDispatch()

const textHandle=(e)=>{
  setInput({...input,[e.target.name]:e.target.value})
  
}
const handleSubmit=(e)=>{
  e.preventDefault()

// Prepare the data to be sent to the backend
const formData = new FormData();
formData.append('username', username);
formData.append('password', password);
formData.append('picture', selectedImage);

dispatch(registration({formData,navigate}))
  
  
}

  return (
    
    <div>
      

      <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1487017931017-0e0d9e02bb0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")',
                  backgroundSize:'cover',
                  minHeight: '100vh' }}>
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">
              <strong>Register Yourself </strong></h5>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" 
                name='username' value={username} onChange={textHandle} />
                <label for="floatingInput">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" 
                name='password' value={password} onChange={textHandle}/>
                <label for="floatingPassword">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input type="file" className="form-control" 
                name='picture' onChange={handleImageUpload}/>
                <label >Profile Picture</label>
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                <label className="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                  Register</button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>






      {/* <form onSubmit={handleSubmit}> 
       <label htmlFor="Username">Username</label> 
       <input type="text" name='username' value={username} onChange={textHandle}/>
       <label htmlFor="Password">Password</label>
       <input type="password" name='password' value={password} onChange={textHandle}/>
       <button>Register</button>
         
       </form>
        <Link to='/login'>Login</Link> */}
       
       
    </div>
  )
}

export default Reg