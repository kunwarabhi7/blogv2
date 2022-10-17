import {auth, db} from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import PostBody from '../components/PostBody';

const dashboard = () => {
    const router = useRouter()
    const [user , loader] = useAuthState(auth)
    const [posts, setPosts] = useState([]);

    const SignOutUser = () => {
        signOut(auth).then(() => {
            router.push('/auth/login')

          }).catch((error) => {
            console.log(error.message);
          });
    }
const getData = () =>{

    if(loader) return ;
    if(!user) return router.push('/auth/login')
    const collectionRef = collection(db,'posts')
    const q = query(collectionRef,where('user','==','user.uid'));
    const unsubsribe = onSnapshot(q,(snapshot)=>{
      setPosts(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id})));
    })
    return unsubsribe;
}

useEffect(()=>{
    getData();
},[user,loader])

  return (
    <div>
        <h1>Your Posts</h1>
        <div>
          {posts.map((post)=>(
   <PostBody {...post} key={post.id} >
  <button>Delete</button>
  <button>Edit</button>
   </PostBody> 
))}
        </div>
        <button onClick={SignOutUser}>Sign Out</button>

    </div>
  )
}

export default dashboard