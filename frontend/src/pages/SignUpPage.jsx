import React from 'react';
import { register } from '../services/authService.js';
import { useState } from 'react';


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


const Steptwo = ({formData, handleChange, handleOptionSelect, handleDayToggle}) => {
  const selectedDays = formData.days_of_study.split(',').filter(Boolean);
  const choiceClass = (selected) => `border h-8 border-[#CABEAB] ${
    selected ? 'bg-[#C67139] text-white' : 'bg-transparent text-[#201E1D] hover:bg-[#F4EBDD]'
  }`;

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
            {[
              ['first', 'First', 'w-20 rounded-l-[25px]'],
              ['second', 'Second', 'w-21'],
              ['third', 'Third', 'w-18'],
              ['final', 'Final', 'w-18'],
              ['graduate', 'Graduate', 'w-24 rounded-r-[25px]'],
            ].map(([value, label, widthClass]) => (
              <button
                key={value}
                onClick={() => handleOptionSelect('year_of_study', value)}
                className={`${choiceClass(formData.year_of_study === value)} ${widthClass}`}
                type='button'
                aria-pressed={formData.year_of_study === value}
              >
                {label}
              </button>
            ))}
          </div>
        </div>


        <div className='pt-5'>
          <div className='pl-3 text-[15px] text-[#5D584F]'>
            <p>Hours you can give this each week</p>
          </div>
          <div>
            {[
              ['4', '4', 'w-14 rounded-l-[25px]'],
              ['8', '8', 'w-12'],
              ['12', '12', 'w-12'],
              ['16', '16+', 'w-14 rounded-r-[25px]'],
            ].map(([value, label, widthClass]) => (
              <button
                key={value}
                onClick={() => handleOptionSelect('hour_of_study', value)}
                className={`${choiceClass(String(formData.hour_of_study) === value)} ${widthClass}`}
                type='button'
                aria-pressed={String(formData.hour_of_study) === value}
              >
                {label || value}
              </button>
            ))}
          </div>
        </div>


        <div className='pt-5'>
          <div className='pl-3 text-[15px] text-[#5D584F]'>
            <p>Which days do you usually</p>
          </div>
          <div className='flex gap-2'>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <button
                key={day}
                onClick={() => handleDayToggle(day)}
                className={`${choiceClass(selectedDays.includes(day))} w-18 rounded-[25px]`}
                type='button'
                aria-pressed={selectedDays.includes(day)}
              >
                {day}
              </button>
            ))}
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
    full_name: '',
    password: '',
    university: '',
    year_of_study: '',
    hour_of_study: '',
    days_of_study: '',
    role: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}))
  };

  const handleOptionSelect = (name, value) => {
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleDayToggle = (day) => {
    setFormData((prev) => {
      const selectedDays = prev.days_of_study.split(',').filter(Boolean);
      const nextDays = selectedDays.includes(day)
        ? selectedDays.filter((selectedDay) => selectedDay !== day)
        : [...selectedDays, day];

      return {...prev, days_of_study: nextDays.join(',')};
    });
  };

  const renderStep = () => {
    switch(step) {
      case 0:
        return <Stepone formData={formData} handleChange={handleChange} />
      case 1:
        return <Steptwo formData={formData} handleChange={handleChange} handleOptionSelect={handleOptionSelect} handleDayToggle={handleDayToggle} />
      case 2:
        return <Stepthree formData={formData} handleChange={handleChange} />
      default:
        return null;
    }
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      const data = await register(email, full_name, password, university, year_of_study, hour_of_study, days_of_study, role);
      console.log("Registration success", data);
    } catch (error){
      console.error(error);
    }
    
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
            
            <div>
              {renderStep()}
            </div>
            
            <form onSubmit={handleSubmit}>
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

            </div>
          </form>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default SignUpPage
