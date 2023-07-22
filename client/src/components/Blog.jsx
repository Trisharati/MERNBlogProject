import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postBlog } from '../redux/FormSlice'

const Blog = () => {

    const navigate=useNavigate()
    const [input,setInput] = useState({
      title:'',
      author:'',
      description:''
    })
  const {title,author,description} = input
  
  
  
  const dispatch = useDispatch()
  
  const textHandle=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const userId=localStorage.getItem('userId')
    dispatch(postBlog({input,userId,navigate})) 
  }

  return (
    <div className='row' 
    style={{backgroundImage:'url("https://png.pngtree.com/background/20211215/original/pngtree-shading-oil-painting-yellow-picture-image_1500357.jpg")',
    backgroundSize:'cover',
    minHeight:'100vh'}}>
    <div className="col-sm-9 col-md-7 col-lg-10 mx-auto">
    <div className='col text-center' 
    style={{marginTop:'40px',
    fontFamily:'serif',
    fontSize:'30px',
    fontWeight:'bold',
    textDecoration: 'underline',
    textDecorationStyle:'wavy'}}>Create Your Blog</div>
    <div className="card-body p-4 p-sm-5">
<form onSubmit={handleSubmit}>
    <div className="form-group">
        <label htmlFor="exampleFormControlInput1" 
        style={{fontSize:'25px',fontFamily:'serif'}}><b>Title</b></label>
        <input type="text" className="form-control mb-3" name="title" value={title} placeholder="Enter Title" onChange={textHandle}/>
    </div>
    <div className="form-group">
        <label htmlFor="exampleFormControlInput1" 
        style={{fontSize:'25px',fontFamily:'serif'}}><b>Author</b></label>
        <input type="text" className="form-control mb-3" name="author" value={author} placeholder="Enter Author's Name" onChange={textHandle}/>
    </div>
    <div className="form-group mb-4 ">
        <label for="exampleFormControlTextarea1"
        style={{fontSize:'25px',fontFamily:'serif'}}><b>Description</b></label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="description" value={description} onChange={textHandle}></textarea>
  </div>
  <div className='text-center'>
  <button className='btn rounded-pill' 
  style={{backgroundColor:'#28A661'}}><b>Create Blog</b></button>
  </div>
    
  </form>

</div>


    </div>

      

     
    </div>
  )
}

export default Blog