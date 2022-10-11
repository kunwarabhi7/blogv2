import {FcGoogle} from 'react-icons/fc'

const login = () => {
  return (
    <div className='shadow-xl p-16 mt-12 text-gray-800 ' >
        <h1 className='text-2xl font-medium'>Join Now</h1>
    <div className='py-4'>
        <h2 className='py-4'>Sign In with our provider</h2>
        <button className='text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2'>Sign in with GOOGLE <FcGoogle className='text-2xl' /></button>
        
    </div>
    </div>
  )
}

export default login