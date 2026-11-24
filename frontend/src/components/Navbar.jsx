import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  const { pathname } = useLocation()

  if (pathname === '/dashboard') {
    return (
      <nav className='flex h-[78px] w-full items-center px-[11%] text-[14px] font-medium text-[#2b2118]'>
        <NavLink to='/dashboard' className='flex items-center gap-3 text-[18px] font-extrabold'>
          <span className='relative h-[22px] w-[22px] rounded-full bg-[#c77740]'>
            <span className='absolute -right-[1px] top-[3px] h-[11px] w-[11px] rounded-full bg-[#2b2118]/55' />
          </span>
          Waypoint
        </NavLink>
        <div className='ml-auto flex items-center gap-[34px]'>
          <NavLink to='' className='hover:text-[#c77740]'>Gap analysis</NavLink>
          <NavLink to='/dashboard' className='rounded-full bg-[#f4e4c9] px-4 py-2'>Dashboard</NavLink>
          <NavLink to='' className='hover:text-[#c77740]'>Roadmap</NavLink>
          <NavLink to='' className='hover:text-[#c77740]'>Community</NavLink>
          <NavLink to='' className='hover:text-[#c77740]'>PDF export</NavLink>
          <button type='button' className='flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#d07d48] text-[11px] text-white'>
            RK
          </button>
          <button type='button' className='text-[13px]'>Ravi</button>
        </div>
      </nav>
    )
  }

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
