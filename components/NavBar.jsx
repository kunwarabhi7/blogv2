import Link from "next/link"
const NavBar = () => {
  return (
    <div className='flex justify-between'>
      <Link href={'/'}>
<div className="font-Mochiy text-lg bg-cyan-300 p-2 rounded-md m-2 cursor-pointer">Home</div>
      </Link>
      <Link href={'/auth/login'}>
<div className='bg-cyan-300 rounded-lg p-4 m-4 '><button>Sign IN</button> </div>
      </Link>
</div>
  )
}

export default NavBar