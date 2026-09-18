import React from 'react'
import { useState } from 'react'


const Stepone = ({formData, handleChange}) => {
  return(
    <div className=''>
      <div className='flex gap-2 items-center'>
        <div className='h-3 w-9 bg-[#C67139] rounded-full'></div>
        <div className='h-3 w-3 bg-[#C67139] rounded-full'></div>
        <div className='h-3 w-3 bg-[#DCD3C4] rounded-full'></div>
        <h3 className='text-[14px] text-[#201E1D]'>Step 1 of 3 · Account</h3>
      </div>
      <h1 className='text-3xl font-[600] pt-5'>Create your account</h1>
      <form action="">
        <div className='pt-3 text-[16px] flex flex-col mr-8 '>
          <label className='text-[15px] text-[#5D584F] pb-2' htmlFor="email">Email</label>
          <input className='border pl-3 h-9 rounded-[20px] border-[#CABEAB]' type="email" id='email' name='email' placeholder='abcd@gmail.com' value={formData.email} onChange={handleChange} />
          <label className='text-[15px] text-[#5D584F] pt-3 pb-2' htmlFor="password">Password</label>
          <input className='border pl-3 h-9 rounded-[20px] border-[#CABEAB]' type="password" id='password' name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
        </div>
      </form>
    </div>
  )
  
}


const Steptwo = ({formData, handleChange}) => {
  return(
    <div>
      <div className='flex gap-2 items-center'>
        <div className='h-3 w-3 bg-[#C67139] rounded-full'></div>
        <div className='h-3 w-9 bg-[#C67139] rounded-full'></div>
        <div className='h-3 w-3 bg-[#DCD3C4] rounded-full'></div>
        <h3 className='text-[14px] text-[#201E1D]'>Step 2 of 3 · About you</h3>
      </div>
      <h1 className='text-3xl font-[600] pt-5'>Tell us about your week</h1>

      <form action="">
        <div className='pt-3 text-[16px] flex flex-col mr-8'>
          <div className='flex flex-row gap-54'>
            <label className='text-[15px] text-[#5D584F] pl-2 pb-2' htmlFor="full_name">Full name</label>
            <label className='text-[15px] text-[#5D584F] pb-2' htmlFor="university">University</label>
          </div>
          <div className='flex gap-5'>
            <input className='border pl-3 h-9 w-65 rounded-[20px] border-[#CABEAB]' type="text" name='full_name' id='full_name' placeholder='Full name' value={formData.full_name} onChange={handleChange} />
            <input className='border pl-3 h-9 w-65 rounded-[20px] border-[#CABEAB]' type="text" name="university" id='university' placeholder='University' value={formData.university} onChange={handleChange} />
          </div>
          
        </div>

        <div className='pt-5'>
          <div className='pl-3 text-[15px] text-[#5D584F]'>
            <p>Year of Study</p>
          </div>
          <div>
            <button className='border h-8 w-20 rounded-l-[25px] border-[#CABEAB]' type='button' data-value="first">First</button>
            <button className='border h-8 w-21 border-[#CABEAB]' type='button' data-value="second">Second</button>
            <button className='border h-8 w-18 border-[#CABEAB]' type='button' data-value="third">Third</button>
            <button className='border h-8 w-18 border-[#CABEAB]' type='button' data-value="final">Final</button>
            <button className='border h-8 w-24 rounded-r-[25px] border-[#CABEAB]' type='button' data-value="graduate">Graduate</button>

          </div>
        </div>


        <div className='pt-5'>
          <div className='pl-3 text-[15px] text-[#5D584F]'>
            <p>Hours you can give this each week</p>
          </div>
          <div>
            <button className='border h-8 w-14 rounded-l-[25px] border-[#CABEAB]' type='button' data-value="first">4</button>
            <button className='border h-8 w-12 border-[#CABEAB]' type='button' data-value="second">8</button>
            <button className='border h-8 w-12 border-[#CABEAB]' type='button' data-value="third">12</button>
            <button className='border h-8 w-14 border-[#CABEAB] rounded-r-[25px]' type='button' data-value="final">16+</button>
          </div>
        </div>


        <div className='pt-5'>
          <div className='pl-3 text-[15px] text-[#5D584F]'>
            <p>Which days do you usually</p>
          </div>
          <div className='flex gap-2'>
            <button className='border h-8 w-18 border-[#CABEAB] rounded-[25px]' type='button' data-value="first">Sun</button>
            <button className='border h-8 w-18 border-[#CABEAB] rounded-[25px]' type='button' data-value="second">Mon</button>
            <button className='border h-8 w-18 border-[#CABEAB] rounded-[25px]' type='button' data-value="third">Tue</button>
            <button className='border h-8 w-18 border-[#CABEAB] rounded-[25px]' type='button' data-value="final">Wed</button>
            <button className='border h-8 w-18 border-[#CABEAB] rounded-[25px]' type='button' data-value="graduate">Thu</button>
            <button className='border h-8 w-18 border-[#CABEAB] rounded-[25px]' type='button' data-value="final">Fri</button>
            <button className='border h-8 w-18 border-[#CABEAB] rounded-[25px]' type='button' data-value="final">Sat</button>

          </div>
        </div>
      </form>
      
    </div>
  )
  
}

const Stepthree = ({formData, handleChange}) => {
  return(
      <div>
      <div className='flex gap-2 items-center'>
        <div className='h-3 w-3 bg-[#C67139] rounded-full'></div>
        <div className='h-3 w-9 bg-[#C67139] rounded-full'></div>
        <div className='h-3 w-3 bg-[#DCD3C4] rounded-full'></div>
        <h3 className='text-[14px] text-[#201E1D]'>Step 2 of 3 · About you</h3>
      </div>
      <h1 className='text-3xl font-[600] pt-5'>What are you aiming at?</h1>
      <p className='text-[#5D584F] text-[15px] pt-5'>Each role is measured against live postings. You can change this later without <br />
        losing progress.</p>

      <form action="">
        <div className='pt-5'>
          <div className='flex flex-col gap-2'>
            <div className=''>
                <button className='border h-18 w-130 border-[#CABEAB] rounded-[25px] font-[500] text-[20px] flex flex-col text-left pl-4 justify-center' type='button' data-value="first">AI / ML
                <p className='text-[12px] text-[#5D584F]'>Modelling, data, deployment</p>
                </button>
            </div>
            <div>
                <button className='border h-18 w-130 border-[#CABEAB] rounded-[25px] font-[500] text-[20px] flex flex-col text-left pl-4 justify-center' type='button' data-value="second">DevOps
                  <p className='text-[12px] text-[#5D584F]'>Cloud, containers, automation</p>
                </button>
            </div>
            <div>
                <button className='border h-18 w-130 border-[#CABEAB] rounded-[25px] font-[500] text-[20px] flex flex-col text-left pl-4 justify-center' type='button' data-value="third">Software Dev
                  <p className='text-[12px] text-[#5D584F]'>Product, APIs, front end</p>
                </button>
            </div>
            
          


          </div>
        </div>
      </form>
    </div>
  )
  
}

const SignUpPage = () => {

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    // Add later 
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}))
  };

  const renderStep = () => {
    switch(step) {
      case 0:
        return <Stepone formData={formData} handleChange={handleChange} />
      case 1:
        return <Steptwo formData={formData} handleChange={handleChange} />
      case 2:
        return <Stepthree formData={formData} handleChange={handleChange} />
      default:
        return null;
    }
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submited", formData);
    
  }

  const changeOption = () => {
    <button></button>
  }

  return (
    <div className='h-full pl-35 flex font-scoutie '>
      {/* left Page */}
      <div className='w-180 pt-20'>

        <div className='relative isolate'>
          <div className='h-40 w-40 rounded-full absolute -top-10 -left-10 bg-[#FFE1D0]'></div>
          <h1 className='text-[55px] relative font-[500] leading-[55px]'>Two minutes <br />
            of setup, then <br />
              the plan.</h1>
          
          <p className='text-[18px] relative text-[#5D584F] pt-5'>We ask three things so the roadmap fits your actual <br />
              week, not an imaginary one with forty free hours in it.</p>
        </div>

        <div className='flex pt-5'>
          <div className='flex flex-col gap-2'>
            <div className='w-8 h-8 bg-[#E1EECC] rounded rounded-full flex justify-center items-center'><p>✓</p></div>
            <div className='w-8 h-8 bg-[#E1EECC] rounded rounded-full flex justify-center items-center'><p>✓</p></div>
            <div className='w-8 h-8 bg-[#E1EECC] rounded rounded-full flex justify-center items-center'><p>✓</p></div>
          </div>

          <div className='flex flex-col gap-4 pt-1 pl-3 font-[300]'>
            <p>Your hours decide the pace, not a default template.</p>
            <p>Your year of study decides how much theory we assume.</p>
            <p>Your role decides which 30 skills you get measured against.</p>
          </div>
        </div>
      </div>


      {/* Right Page  */}
      <div className='pt-10'>
        <div className='h-125 w-150 bg-[#EBDDC5] rounded rounded-[25px]'>
          <div className='pt-5 pl-5'>
              <form onSubmit={handleSubmit}>
            <div>
              {renderStep()}
            </div>
            

            <div className='flex'>
              

              {step == 0 && (
                <button className='bg-[#C67139] h-12 mt-5 w-150 mr-8 rounded-[30px] text-white font-[500] text-[18px]' type='button' onClick={handleNext}>Create Account</button>
              )}

              {step == 1 && (
                <button className='bg-[#C67139] h-12 mt-5 w-30 rounded-[30px] text-white font-[500] text-[18px]' type='button' onClick={handleNext}>Continue</button>
              )}

              {step == 2 && (
                <button className='bg-[#C67139] h-12 mt-5 w-45 rounded-[30px] text-white font-[500] text-[18px]' type='button' onClick={handleNext}>Upload my resume</button>
              )}

              {step > 0 && (
                <button className='text-[#C67139] h-12 mt-5 w-30 rounded-[30px] font-[600] text-[20px]' type='button' onClick={handleBack}>Back</button>
              )}


              {/* {step < 2 ? (
                <button className='bg-red-500 h-30 w-50' type='button' onClick={handleNext}>Next</button>
              ) : (
                <button className='bg-green-500 h-30 w-50' type='button' onClick={handleSubmit}>Submit</button>
              )} */}
            </div>
          </form>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default SignUpPage
