import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import {loadBlog,updateBlog} from '../redux/FormSlice'

const EditBlog = () => {

const [input,setInput] = useState({
        title:'',
        author:'',
        description:''
    })

const {title,author,description} = input
const navigate=useNavigate()
const dispatch = useDispatch()
const {blogid} = useParams()



useEffect(()=>{
  const loaddata=()=>{
    dispatch(loadBlog(blogid))
    .then((data)=>{
      setInput(data.payload)
    })
  }
 loaddata()
},[])



const textHandle=(e)=>{
  setInput({...input,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
e.preventDefault()
dispatch(updateBlog({input,blogid,navigate}))

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
    textDecorationStyle:'wavy'}}>Update Your Blog</div>

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
  style={{backgroundColor:'#28A661'}}><b>Update</b></button>
  </div>
    
  </form>

</div>


    </div>

      

     
    </div>
//     <div>EditBlog

// <form>
//     <div className="form-group">
//         <label htmlFor="exampleFormControlInput1">Title</label>
//         <input type="text" className="form-control" name="title" value={title} onChange={textHandle} />
//     </div>
//     <div className="form-group">
//         <label htmlFor="exampleFormControlInput1">Author</label>
//         <input type="text" className="form-control" name="author" value={author} onChange={textHandle}/>
//     </div>
//     <div className="form-group">
//         <label htmlFor="exampleFormControlTextarea1">Description</label>
//         <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="description" value={description} onChange={textHandle}></textarea>
//   </div>
//     <button onClick={handleClick}>Update Blog</button>
//   </form>

//     </div>
  )
}

export default EditBlog