import {auth, db} from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import PostBody from '../components/PostBody';
import Link from 'next/link';

const dashboard = () => {
    const route = useRouter()
    const [user , loader] = useAuthState(auth)
    const [posts, setPosts] = useState([]);

    const SignOutUser = () => {
        signOut(auth).then(() => {
            route.push('/auth/login')

          }).catch((error) => {
            console.log(error.message);
          });
    }

  const getData = async () => {
    if (loader) return;
    if (!user) return route.push("/auth/login");

    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, where("user", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  };

useEffect(()=>{
    getData();
},[user,loader])

  return (
    <div>
      <h1>Your posts</h1>
      <div>
        {posts.map((post) => {
          return (
            <PostBody {...post} key={post.id}>
              <div className="flex gap-4">
                <button
                  onClick={() => deletePost(post.id)}
                  className="text-pink-600 flex items-center justify-center gap-2 py-2 text-sm"
                >
                   Delete
                </button>
                <Link href={{ pathname: "/post", query: post }}>
                  <button className="text-teal-600 flex items-center justify-center gap-2 py-2 text-sm">
                   
                    Edit
                  </button>
                </Link>
              </div>
            </PostBody>
          );
        })}
      </div>
      <button
        className="font-medium text-white bg-gray-800 py-2 px-4 my-6"
        onClick={SignOutUser}
      >
        Sign out
      </button>
    </div>
  )
}

export default dashboard