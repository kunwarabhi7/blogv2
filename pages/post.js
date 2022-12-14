import {auth , postsRef} from '../utils/firebase'
import {  addDoc,serverTimestamp } from "firebase/firestore"; 

import {useAuthState} from 'react-firebase-hooks/auth'
import { useState } from 'react';
import  { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const post = () => {
    const [user , loader ] = useAuthState(auth)
    const [post, setPost] = useState({ description: "" });
    const route = useRouter()
    
    const SubmitPost = async(e) =>{
e.preventDefault()

//if empty 
if(!post.description) {
  toast.error('Please write a description')
  return;
}
if(post.description.length>300){
  toast.error('Text Limit exceeded')
  return;
}

const docRef = await addDoc(postsRef, {
   ...post,
   timestamp: serverTimestamp(),
   user:user.uid,
   avatar:user.photoURL
   ,   username: user.displayName  
  });
setPost({...post ,description:''})
return route.push('/')
    }

  return (
    <div className="my-20 p-12 shadow-lg  max-w-md mx-auto " >
        <form onSubmit={SubmitPost}>
        <h1 className='text-3xl font-Mochiy'>Create a New Post</h1>
        <div className='py-2'>
            <h3 className='text-lg font-medium py-2'>Description</h3>
            <textarea value={post.description} onChange={e=> setPost({...post, description:e.target.value})} className='bg-gray-700 w-full h-20 text-white py-2'></textarea>
            <p className={`${post.description.length>300 ? 'text-red-700': ''}`}>{post.description.length}/300</p>
        </div>
<button onClick={SubmitPost} className='w-full p-2 bg-cyan-500 text-white font-bold m-2 rounded-lg'>Submit</button>
        </form>
        <div>

        </div>

    </div>
  )
}

export default post;