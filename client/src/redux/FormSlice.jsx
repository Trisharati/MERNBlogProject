import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { register,login,postblog,viewblog, loadblog,updateblog } from '../Api'
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


export const registration=createAsyncThunk(
    '/getregister',
    async ({formData,navigate})=>{

        try {
            const response = await register(formData)
            
            if(response){
              console.log('Registration successful')
              toast.success('Thank you for registration 🙏')
              navigate('/login')
            }
            else{
              console.log('Failed to register')
            }   
          } catch (error) {
            console.error('Error:', error.message);
            throw new Error(error.message);
          }
        }
        
    
)

export const loginfunc=createAsyncThunk(
    '/getlogin',
    async ({input,navigate})=>{
        try {
            const response = await login(input)
            if(response){
              console.log(response)
              console.log('Logged in successfully')
              toast.success('Welcome ' + response + '👋')
              navigate('/dashboard')
            return response
            }
          } catch (error) {
            console.error('Error:', error.message);
            throw new Error(error.message);
          }
        }
        
    
)

export const postBlog=createAsyncThunk(
  '/postblog',
  async ({input,userId,navigate})=>{
      try {
          const response = await postblog(input,userId)
          if(response){
            toast.success('Request sent successfully 👍')
          navigate('/dashboard')
          }
        } catch (error) {
          console.error('Error:', error.message);
          throw new Error(error.message);
        }
      }
      
  
)
export const viewBlogs=createAsyncThunk(
  '/viewblog',
  async ()=>{
      try {
          const response=await viewblog()
          
          if(response){
            return response
          }
         
          
        } catch (error) {
          console.error('Error:', error.message);
          throw new Error(error.message);
        }
      } 
)

export const loadBlog = createAsyncThunk(
  '/loadblog',
  async(blogid)=>{
    try{
      const response = await loadblog(blogid)
     
      return response[0]
    }
    catch(err){
      throw err
    }
  }
)

export const updateBlog = createAsyncThunk(
  '/updateblog',
  async({input,blogid,navigate})=>{
    try{
    const response = await updateblog(input,blogid)
    if(response){
      toast.success('Blog updated successfully ✍')
      navigate('/dashboard')
      return response
    }else{
      console.log('Error from slice')
    }
  }
catch(err){
  console.log(err)
}
  }  
)

const dataSlice = createSlice({
    name: 'form',
    initialState: {
      data: null,
      loading: false,
      error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
      builder
        .addCase(registration.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(registration.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(registration.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

  
  export const formReducer = dataSlice.reducer