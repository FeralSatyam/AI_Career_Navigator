import React from 'react'

const LandingPage = () => {
  return (
    <div className='flex flex-col w-full overflow-x-hidden px-35 font-scoutie'>
      {/* first page */}
      
      <section className=''>
        <div className='flex w-full '>
          {/* left page */}
          <div className='pt-20 w-1/2'>
            <div className='bg-[#F0FAE1] rounded-4xl w-75 h-10 flex items-center justify-center'>
                <p className=''>Built for students and professionals</p>
            </div>
            
            <h1 className='text-6xl font-[500] pt-5'>Your resume, <br />
                read honestly.</h1>
            <p className='pt-8 text-[18px]'>Waypoint compares what you already know against the job you <br />
              actually want, names the gaps out loud, and hands you an eight- <br />
              week plan built entirely from free material.</p>

            <div className='pt-8 text-[20px] flex'>
                <div className='bg-[#C67139] w-60 rounded-[25px] flex justify-center items-center h-14 font-bold'> 
                    <button className='text-[#F5EAD8]'>Upload your resume</button>
                </div>
                <div className='flex pl-5 text-[#C67139] font-bold'>
                    <button>See a sample report</button>
                </div>
            </div>

            <div className='flex gap-5 pt-7'>
              <div>
                <p className='text-[25px] font-bold'>1,284</p>
                <p className='text-[14px] text-[#201E1D]'>students on a plan</p>
              </div>
              <div>
                <p className='text-[25px] font-bold'>412</p>
                <p className='text-[14px] text-[#201E1D]'>postings behind the AI/ML profile</p>
              </div>

              <div>
                <p className='text-[25px] font-bold'>100%</p>
                <p className='text-[14px] text-[#201E1D]'>free learning resources</p>
              </div>
              
              
            </div>

            
          </div>

        {/* Right page */}
        <div className='flex w-1/2 items-center'>
        <div className='relative isolate'>

          <div className='absolute -top-8 right-15 -z-10 bg-[#F1D5C5] h-50 w-50 rounded rounded-[100px] '></div>
          <div className='absolute top-58 right-90 -z-10 bg-[#E1EECC] h-50 w-50 rounded rounded-[200px] '></div>

          <div className=' relative w-135 h-100 bg-[#EBDDC5] ml-[50px] rounded-[40px] z-10'>
            <div className='flex justify-between pt-4 ml-8 mr-8'>
              <p className='text-[#C67139] mt-2 text-[15px]'>SAMPLE REPORT · AI / ML ENGINEER</p>
              <p className='text-[#643312] bg-[#FFF2EB] w-25 text-[15px] h-9 rounded-[20px] flex justify-center items-center'>78% ready</p>
            </div>

            <div className='flex w-full mt-6'>
              <div className='flex flex-col gap-3 ml-8 w-1/3'>
                <p>Python & data</p>
                <p>Classical ML</p>
                <p>Deep learning</p>
                <p>MLOps</p>
                <p>Cloud</p>
              </div>

              <div className='flex flex-col gap-4 w-2/3 mr-8'>
                <div className='bg-[#DCD3C4] rounded-[25px] h-5 overflow-hidden'>
                  <div className='bg-[#7A8A5E] rounded-[25px] h-5' style={{width: '85%'}}></div>
                </div>
                <div className='bg-[#DCD3C4] rounded-[25px] h-5'>
                  <div className='bg-[#C67139] rounded-[25px] h-5' style={{width: '65%'}}></div>
                </div>
                <div className='bg-[#DCD3C4] rounded-[25px] h-5'>
                  <div className='bg-[#C67139] rounded-[25px] h-5' style={{width: '45%'}}></div>
                </div>
                <div className='bg-[#DCD3C4] rounded-[25px] h-5'>
                  <div className='bg-[#C67139] rounded-[25px] h-5' style={{width: '20%'}}></div>
                </div>
                <div className='bg-[#DCD3C4] rounded-[25px] h-5'>
                  <div className='bg-[#C67139] rounded-[25px] h-5' style={{width: '35%'}}></div>
                </div>
              </div>
            </div>

            <hr className='border border-[#CABEAB] w-119 ml-8 mr-8 mt-8'/>

            <div className='ml-8 mr-8 mt-5'>
              <h1 className='text-[21px] font-bold'>Week 3 · Deep learning foundations</h1>
              <p className='text-[15px] mt-2'>Train an image classifier from scratch in PyTorch and log every run.</p>
            </div>

          </div>
          </div>
        </div>

      </div>
    
      </section>



    {/* Second Page */}

    <section className='py-22'>
      <div className=''>
        <h1 className='text-[45px] font-[600]'>Three steps, about twenty seconds</h1>
        <div className='flex flex-row gap-6 mt-10'>
          <div className='bg-[#EBDDC5] h58 w-200 rounded rounded-[55px]'>
            <p className='bg-[#F5EAD8] h-15 w-15 rounded rounded-[30px] flex justify-center items-center text-[25px] ml-8 mt-8 font-bold'>1</p>
            <h1 className='ml-8 mt-2 text-[25px] font-[600]'>Upload your resume</h1>
            <p className='ml-8 mt-2'>PDF or DOCX. We read skills, projects and <br /> 
              experience, not just keywords.</p>
          </div>
          <div className='bg-[#FFF2EB] h58 w-200 rounded rounded-[55px]'>
            <p className='bg-[#F5EAD8] h-15 w-15 rounded rounded-[30px] flex justify-center items-center text-[25px] ml-8 mt-8 font-bold'>2</p>
            <h1 className='ml-8 mt-2 text-[25px] font-[600]'>Pick the job you want</h1>
            <p className='ml-8 mt-2'>Each role profile is built from live postings, <br />
              refreshed monthly.</p>
          </div>
          <div className='bg-[#F0FAE1] h-58 w-200 rounded rounded-[55px]'>
            <p className='bg-[#F5EAD8] h-15 w-15 rounded rounded-[30px] flex justify-center items-center text-[25px] ml-8 mt-8 font-bold'>3</p>
            <h1 className='ml-8 mt-2 text-[25px] font-[600]'>Get the plan</h1>
            <p className='ml-8 mt-2'>Eight weeks, free resources, one shippable <br />
              project per week.</p>
          </div>
        </div>


        <div className='bg-[#E1EECC] h-90 rounded rounded-[30px] mt-30'>
          <div className='flex justify-between'>
            <h1 className='text-[45px] ml-10 pt-5 font-[500]'>Target roles, each <br />
              mapped to live job <br /> 
              postings</h1>
              <button className='bg-[#C67139] h-17 w-40 text-[20px] rounded rounded-[40px] mt-30 mr-10 text-[#F5EAD8] font-[700]'>Pick your role</button>
          </div>

          <div className='flex flex-row gap-6 ml-8 mr-8 m-7'>
            <div className='flex justify-center items-center bg-[#F5EAD8] h-16 w-100 rounded rounded-[50px]'>
              <p className='text-[20px] font-[500]'>AI / ML Engineer</p>
            </div>
            <div className='flex justify-center items-center bg-[#F5EAD8] h-16 w-100 rounded rounded-[50px]'>
              <p className='text-[20px] font-[500]'>DevOps Engineer</p>
            </div>
            <div className='flex justify-center items-center bg-[#F5EAD8] h-16 w-100 rounded rounded-[50px]'>
              <p className='text-[20px] font-[500]'>Software Developer</p>
            </div>
            <div className='flex justify-center items-center bg-[#F5EAD8] h-16 w-100 rounded rounded-[50px]'>
              <p className='text-[20px] font-[500]'>Data Analyst</p>
            </div>
            <div className='flex justify-center items-center bg-[#F5EAD8] h-16 w-100 rounded rounded-[50px]'>
              <p className='text-[20px] font-[500]'>Frontend Engineer</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    


    </div>
  )
}

export default LandingPage
