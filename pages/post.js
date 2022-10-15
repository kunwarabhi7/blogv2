import {auth} from '../utils/firebase'
import React from 'react'

const post = () => {
  return (
    <div className="my-20 p-12 " >
        <form>
        <h1>Create a New Post</h1>
        <div>
            <h3>Description</h3>
            <textarea></textarea>
            <p>0/300</p>
        </div>
<button>Submit</button>
        </form>
        <div>

        </div>

    </div>
  )
}

export default post