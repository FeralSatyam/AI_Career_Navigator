import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex w-full text-[18px] pt-5 items-center'>
        <div className='flex-1 flex pl-35 mr-auto'>
            <NavLink to='/' className='font-scoutie font-[500] text-[23px]'>Waypoint</NavLink>
        </div>

      {/* Right Nav */}
      <div className=''>

      </div>

        <div className='flex-1 flex justify-center ml-auto font-scoutie items-center'>
          <NavLink to="" className='mx-4'>How it works</NavLink>
          <NavLink to="" className='mx-4'>Roles</NavLink>
          <NavLink to="" className='mx-4'>Community</NavLink>
          <NavLink to="/signin" className='mx-4 border h-10 w-23 rounded-[20px] flex justify-center items-center font-[500]'>Sign In</NavLink>
          <NavLink to="/signup" className='mx-4 bg-[#C67139] h-10 w-27 rounded-[20px] flex justify-center items-center font-[500]'>Start free</NavLink>
        </div>
        
    </nav>
  )
}

export default Navbar
