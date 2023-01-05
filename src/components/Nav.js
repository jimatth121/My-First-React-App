import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className='flex flex-row p-4 justify-between bg-slate-400 px-20'>
        <div className=''> <h1 className='font-bold'>LOGO</h1> </div>
        <ul className=' hidden  md:flex gap-20 '>
           <li><a>Home</a></li>
           <li><a>About Us</a></li> 
           <li><a>Contact</a></li> 
           <li><a>Services</a></li> 
        </ul>
        <div className=' md:hidden'>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg> 
        </div>
      </nav>
    </div>
  )
}

export default Nav
