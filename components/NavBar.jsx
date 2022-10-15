import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";

const NavBar = () => {
  const [user, loader] = useAuthState(auth);
 console.log(user)
  return (
    <div className="flex justify-between">
      <Link href={"/"}>
        <button className="font-Mochiy text-lg p-2 rounded-md m-2 cursor-pointer">
          Home
        </button>
      </Link>
      {!user && (
        <Link href={"/auth/login"}>
          <div className="bg-cyan-300 rounded-lg px-4 py-2 m-4 ">
            <button>Join Now</button>
          </div>
        </Link>
      )}
     {user && (
       <div className="flex items-center gap-4">
        <Link href='/post'>
        <button className="bg-cyan-500 rounded-md py-2 px-4 text-sm">Post</button>
        </Link>
        <Link href='/dashboard'>
      <img className="rounded-full w-14 cursor-pointer m-4" src={user.photoURL} />
        </Link>
       </div>
     )}
    </div>
  );
};

export default NavBar;
