import Head from 'next/head'
import PostBody from '../components/PostBody'
import { useState,useEffect } from 'react'
import {  onSnapshot, orderBy, query } from "firebase/firestore";
import {db, postsRef} from '../utils/firebase'

export default function Home() {
const [allData , setAllData]  = useState([])

  const getAllPost =async () => {
    const q = query(postsRef, orderBy('timestamp','desc'))

    const unsubsribe = onSnapshot(q, (snapshot)=>{
      setAllData(snapshot.docs.map((doc)=> ({...doc.data() , id: doc.id})));
    })

return unsubsribe;
  }

  useEffect(()=>{
    getAllPost()
  },[])

  return (
    <div>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
{allData.map((post)=>(
  <PostBody {...post} key={post.id} />
))}      
      </div>
    </div>
  )
}
