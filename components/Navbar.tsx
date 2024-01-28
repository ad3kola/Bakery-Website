import { navLinks } from "@/utils/utils"

function Navbar() {
  return (
	<nav className = 'w-full relative'>
	  <div className ='flex items-center justify-between bg-slate-900 py-4 lg:px-5 xl:px-8'>
			  <h1 className ='text-2xl text-white font-bold'>CAKE</h1>
			  <ul className="hidden md:flex items-center justify-evenly space-x-3 xl:space-x-5">
				  {navLinks.map((link, id) => 
					  <li className ='text-sm text-white font-semibold cursor-pointer ease-in transform  transition hover:scale-110 duration-100 tracking-wider uppercase p-3' key = {link}>{link}</li>
				  )}
			  </ul>
			  <p className = 'inline-flex md:hidden h-7 w-7 text-white cursor-pointer'>icon</p>
	  </div>
	</nav>
  )
}

export default Navbar
