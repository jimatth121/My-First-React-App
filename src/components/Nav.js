import React from 'react'
import { useState } from 'react'

const Nav = () => {
    const [disappear, setAppear] = useState('left-full')
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
        <div onClick={()=>{
            setAppear("left-0")

        }} className=' md:hidden'>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg> 
        </div>
      </nav>

      <div className={` absolute w-full ${disappear}`} >
      <ul className='  flex justify-center flex-col content-center bg-slate-700 text-white text-center  '>
           <li><a>Home</a></li>
           <li><a>About Us</a></li> 
           <li><a>Contact</a></li> 
           <li><a>Services</a></li> 
        </ul>
      </div>
    </div>

    
  )
}

export default Nav
