import {auth} from '../utils/firebase'
import React from 'react'

const post = () => {
  return (
    <div className="my-20 p-12 shadow-lg  max-w-md mx-auto " >
        <form>
        <h1 className='text-3xl font-Mochiy'>Create a New Post</h1>
        <div className='py-2'>
            <h3 className='text-lg font-medium py-2'>Description</h3>
            <textarea className='bg-gray-700 w-full h-20 text-white py-2'></textarea>
            <p>0/300</p>
        </div>
<button className='w-full p-2 bg-cyan-500 text-white font-bold m-2 rounded-lg'>Submit</button>
        </form>
        <div>

        </div>

    </div>
  )
}

export default post