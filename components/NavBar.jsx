import Link from "next/link"
const NavBar = () => {
  return (
    <div className='flex justify-between'>
      <Link href={'/'}>
<div className="font-Mochiy text-lg bg-cyan-300 p-2 rounded-md m-2 cursor-pointer">Home</div>
      </Link>
      <Link href={'/auth/login'}>
<div className='bg-cyan-300 rounded-lg px-4 py-2 m-4 '><button>Join Now</button> </div>
      </Link>
</div>
  )
}

export default NavBar