
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import {FcGoogle} from 'react-icons/fc'



const login = () => {
    const provider = new GoogleAuthProvider();



    const signInWithGooglePopup = () => {
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    }
  return (
    <div className='shadow-xl p-16 mt-12 text-gray-800 ' >
        <h1 className='text-2xl font-medium'>Join Now</h1>
    <div className='py-4'>
        <h2 className='py-4'>Sign In with our provider</h2>
        <button onClick={signInWithGooglePopup} className='text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2'>Sign in with GOOGLE <FcGoogle className='text-2xl' /></button>
        
    </div>
    </div>
  )
}

export default login