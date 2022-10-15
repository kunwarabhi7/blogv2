import {auth} from '../utils/firebase'
import { signOut } from "firebase/auth";
import { useRouter } from 'next/router';


const dashboard = () => {
    const router = useRouter()

    const SignOutUser = () => {
        signOut(auth).then(() => {
            router.push('/auth/login')
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div>
        <h1>Your Posts</h1>
        <div>Posts</div>
        <button onClick={SignOutUser}>Sign Out</button>

    </div>
  )
}

export default dashboard