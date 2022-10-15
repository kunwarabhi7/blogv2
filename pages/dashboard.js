import {auth} from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const dashboard = () => {
    const router = useRouter()
    const [user , loader] = useAuthState(auth)

    const SignOutUser = () => {
        signOut(auth).then(() => {
            router.push('/auth/login')
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
const getData = () =>{

    if(loader) return ;
    if(!user) return router.push('/auth/login')
}

useEffect(()=>{
    getData();
},[user,loader])

  return (
    <div>
        <h1>Your Posts</h1>
        <div>Posts</div>
        <button onClick={SignOutUser}>Sign Out</button>

    </div>
  )
}

export default dashboard