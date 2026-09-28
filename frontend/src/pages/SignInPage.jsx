import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignInPage = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

  return (
    <div className='h-full pl-35 flex font-scoutie '>
      {/* left Page */}
      <div className='w-180 pt-40'>

        <div className='relative isolate'>
          <div className='h-40 w-40 rounded-full absolute -top-10 -left-10 bg-[#E1EECC]'></div>
          <h1 className='text-[65px] relative font-[500] leading-[55px]'>Welcome Back.</h1>
          
          <p className='text-[18px] relative text-[#5D584F] pt-5'>Sign in to pick up your roadmap where you left it. Your <br />
            progress, streak and shipped projects are all waiting.</p>
        </div>

        <div className='h-30 w-100 rounded-[40px] mt-7 bg-[#EBDDC5]'>
            <div className='pl-7 pt-5'>
                <p className='text-[#C67139] text-[14px]'>ON THE AI / ML TRACK THIS MONTH</p>
                <div className='flex gap-2'>
                    <div className='h-10 w-10 bg-[#FFE1D0] rounded-full mt-2 flex justify-center items-center'>
                        <p className='font-[600] text-[17px]'>1.2k</p>
                    </div>
                    <div className='mt-2'>
                        <h3 className='font-[600] text-[17px] '>1,285 students learning</h3>
                        <p className='text-[#5D584F] text-[13px]'>Median readiness 61% · most stall at week 4</p>
                    </div>
                </div>
            </div>
        </div>

      </div>


    {/* Right Page  */}
    <div className='h-100 w-130 mt-18 bg-[#EBDDC5] rounded rounded-[25px]'>
        <div className='pt-5 pl-5'>
            <h1 className='text-3xl font-[600] pt-5'>Sign In</h1>
            <form action="">
                <div className='pt-3 text-[16px] flex flex-col mr-8 '>
                <label className='text-[15px] text-[#5D584F] pb-2' htmlFor="email">Email</label>
                <input className='border pl-3 h-9 rounded-[20px] border-[#CABEAB]' type="email" id='email' name='email' placeholder='abcd@gmail.com' value={formData.email} onChange={handleChange} />
                <label className='text-[15px] text-[#5D584F] pt-3 pb-2' htmlFor="password">Password</label>
                <input className='border pl-3 h-9 rounded-[20px] border-[#CABEAB]' type="password" id='password' name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
                </div>

                <button className='bg-[#C67139] h-12 mt-5 w-120 mr-8 rounded-[30px] text-white font-[500] text-[18px]' type='button'>Sign In</button>
            </form>

            <div className='flex gap-2 mt-4 justify-center'>
                <p>New here?</p>
                <Link to='/signup' className='text-[#C67139] underline underline-offset-2'>Create an account</Link>
            </div>
            
        </div>
    </div>

    </div>
  )
}

export default SignInPage
