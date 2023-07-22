import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {viewBlogs} from '../redux/FormSlice'
import {Button} from 'reactstrap'


const Dashboard = () => {

  

const [input,setInput] = useState([
 {
  _id:'',
  title:'',
  author:'',
  description:''
 }

])

let response={}

const dispatch = useDispatch()
const getData=()=>{
response=dispatch(viewBlogs())
  .then((data)=>{
    setInput(data.payload)
    
})
}

useEffect(()=>{
 getData()
},[])


const [showFullContent, setShowFullContent] = useState(false);

  const toggleShowFullContent = () => {
    setShowFullContent(!showFullContent);
  }


  return (
    <div >
          {input && input.map((res,index)=>{
        const {_id,title,author,description} = res
        
        return(

          <div className='card p-4' key={index}
          > 
            <div className="card-header" 
            style={{color:'black',backgroundColor:'blanchedalmond'}}>
             <b>{title}</b>
            </div>
               <div className="card-body">
                  <blockquote className="blockquote mb-0">
                  <p
                  style={{
                    height: showFullContent ? 'auto' : '100px',
                    width: '100%',
                    overflow: 'hidden'}}>
                      {description}</p>
              <footer className="blockquote-footer"> 
                <cite title="Source Title">{author}</cite>
                <div>
                  <Link to={`/loadblog/${_id}`}>
                  <Button>Edit</Button>
                  </Link>  
                  <Button onClick={toggleShowFullContent}
                  style={{marginLeft:'950px',
                  backgroundColor:'green',
                  
                  }}>
                {showFullContent ? 'Read Less' : 'Read More'}
              </Button>
                </div>
              
               
                
                
                
                </footer>
              </blockquote>
          </div>
            </div>


            

          


   


        
            
            
   

        )
      })}
      
    </div>
  )
}



export default Dashboard;