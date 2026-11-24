import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DashboardPage = () => {
  const [items, setItems] = useState(null);

  const token = localStorage.getItem('userToken');

  useEffect(() => {
    const fetchItems = async() => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/items/getItems`, {
        headers: {
          Authorization: `Bearer ${token}`
        } 
      })
      
      if(response && response.data) {
        setItems(response.data.data)
      }
      

    }
    fetchItems()
  }, [])

  return (
    <section className='mx-auto w-full max-w-[1060px] pb-10 pt-3 font-scoutie text-[#282118]'>
      <div className='flex items-end justify-between'>
        <div>
          <h1 className='text-[48px] font-[600] leading-tight tracking-[-1.5px]'>
            Good to see you, {items?.full_name?.split(' ')[0] || 'Ravi'}
          </h1>
          <p className='mt-3 text-[17px] text-[#7a6d5d]'>
            Week 3 of 8 · AI / ML Engineer track · 14 day streak
          </p>
        </div>
        <button type='button' className='mb-[-1px] rounded-full bg-[#c77740] px-[22px] py-[11px] text-[14px] font-bold text-white'>
          Continue week 3
        </button>
      </div>

      <div className='mt-7 grid grid-cols-[minmax(0,2.1fr)_minmax(300px,1fr)] gap-[18px]'>
        <div className='space-y-[18px]'>
          <div className='grid h-[210px] grid-cols-[220px_1fr] items-center rounded-[22px] border border-[#eadbc1] bg-[#fffaf2] px-4'>
            <div className='relative flex h-[170px] items-center justify-center'>
              <div
                className='relative h-[150px] w-[150px] rounded-full'
                style={{ background: 'conic-gradient(#c77740 0deg 259deg, #eadcca 259deg 360deg)' }}
              >
                <div className='absolute inset-[13px] rounded-full bg-[#fffaf2]' />
                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                  <span className='text-[42px] font-black leading-none tracking-[-2px]'>73%</span>
                  <span className='mt-2 text-[11px] font-bold text-[#b18a67]'>READY</span>
                </div>
              </div>
            </div>

            <div className='pr-3'>
              <p className='mb-4 text-center text-[10px] font-semibold uppercase tracking-[1.3px] text-[#c49a73]'>
                Readiness over time
              </p>
              <svg className='h-[82px] w-full overflow-visible' viewBox='0 0 290 66' role='img' aria-label='Readiness trend'>
                <line x1='8' y1='52' x2='282' y2='52' stroke='#e7dac5' strokeWidth='1' />
                <line x1='8' y1='23' x2='282' y2='23' stroke='#e7dac5' strokeWidth='1' strokeDasharray='3 5' />
                <path d='M8 45 C55 46, 62 43, 102 38 C145 33, 162 25, 220 17' fill='none' stroke='#c77740' strokeWidth='3' strokeLinecap='round' />
                <circle cx='220' cy='17' r='5' fill='#c77740' />
                <path d='M220 17 C238 14, 256 10, 282 7' fill='none' stroke='#6d904f' strokeWidth='2.5' strokeDasharray='5 5' />
                <text x='176' y='8' fill='#685c4d' fontSize='10'>target 94% by week 8</text>
              </svg>
              <div className='mt-1 flex justify-between border-t border-[#ede2cf] pt-[14px] text-[11px] text-[#806f5a]'>
                <span>Started at 62%</span>
                <span>+16 pts in 3 weeks</span>
                <span>Median peer: 61%</span>
              </div>
            </div>
          </div>

          <div className='rounded-[22px] border border-[#eadbc1] bg-[#fffaf2] px-3 pb-3 pt-[22px]'>
            <p className='mb-3 px-[12px] text-[11px] font-semibold uppercase tracking-[1.2px] text-[#c49a73]'>
              This week's checklist
            </p>
            <div className='space-y-[9px]'>
              {[
                ['done', 'Watch: autograd and the training loop', '45 min'],
                ['done', 'Read: PyTorch 60 Minute Blitz, parts 1–3', '1 hr'],
                ['active', 'Build: training loop on CIFAR-10 subset', '3 hrs'],
                ['todo', 'Write: experiment log for five runs', '40 min'],
              ].map(([state, label, time]) => (
                <div key={label} className='flex h-[58px] items-center rounded-[12px] border border-[#e9decb] bg-[#fffdf8] px-[16px]'>
                  <span className={`mr-4 flex h-[21px] w-[21px] items-center justify-center rounded-full text-[13px] ${state === 'done' ? 'bg-[#9a9a62] text-white' : state === 'active' ? 'border-[3px] border-[#d07d48] bg-white' : 'border border-[#d9cdb6] bg-white'}`}>
                    {state === 'done' ? '✓' : ''}
                  </span>
                  <span className='flex-1 text-[14px] text-[#564d42]'>{label}</span>
                  <span className='text-[12px] text-[#9b8d78]'>{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-3 gap-[12px]'>
            {[
              ['Deep learning', '30% → 44%', '+14 this week'],
              ['Hours logged', '6.5 / 8', 'on pace'],
              ['Projects shipped', '2 of 3', 'next: week 3'],
            ].map(([title, value, detail]) => (
              <div key={title} className='h-[118px] rounded-[20px] border border-[#eadbc1] bg-[#fffaf2] px-[18px] pt-[16px]'>
                <p className='text-[12px] text-[#9b8d78]'>{title}</p>
                <p className='mt-[10px] text-[23px] font-black'>{value}</p>
                <p className='mt-[8px] text-[11px] text-[#c77740]'>{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className='h-[685px] overflow-hidden rounded-[22px] border border-[#eadbc1] bg-[#fffaf2]'>
          <div className='border-b border-[#eadbc1] px-[18px] pt-[24px]'>
            <p className='mb-[18px] text-[10px] font-semibold uppercase tracking-[1.2px] text-[#c49a73]'>
              Next best actions
            </p>
            {[
              ['Finish the CIFAR-10 training loop', 'The last blocking item before week 4’s fine-tuning work.', '+6 pts'],
              ['Add PyTorch to your resume with a link', 'You now have evidence. The claim currently reads as unsupported.', '+3 pts'],
              ['Start MLflow a week early', 'Peers who track experiments from week 3 finish 1.4 weeks sooner.', '+2 pts'],
            ].map(([title, body, points]) => (
              <div key={title} className='border-t border-[#eee3d1] py-[16px] first:border-t-0'>
                <p className='text-[15px] font-black leading-[1.25]'>{title}</p>
                <p className='mt-[8px] text-[11.5px] leading-[1.55] text-[#776c5e]'>{body}</p>
                <span className='mt-[10px] inline-block rounded-full border border-[#eadbc1] px-[9px] py-[4px] text-[10px] text-[#6f634f]'>{points}</span>
              </div>
            ))}
          </div>
          <div className='bg-[#edf1df] px-[18px] pb-[16px] pt-[22px]'>
            <p className='mb-[16px] text-[10px] font-semibold uppercase tracking-[1.2px] text-[#b09a66]'>
              Shipped so far
            </p>
            <div className='mb-[12px] rounded-[12px] bg-white/70 px-[14px] py-[14px]'>
              <p className='text-[14px] font-black'>Linear regression from scratch</p>
              <p className='mt-[7px] text-[11px] text-[#8b806d]'>Week 1 · NumPy · 42 stars in class</p>
            </div>
            <div className='mb-[14px] rounded-[12px] bg-white/70 px-[14px] py-[14px]'>
              <p className='text-[14px] font-black'>Churn model, leak-free pipeline</p>
              <p className='mt-[7px] text-[11px] text-[#8b806d]'>Week 2 · scikit-learn · write-up included</p>
            </div>
            <button type='button' className='h-[44px] w-full rounded-full border border-[#cad4a7] bg-white/70 text-[13px] font-black'>
              Export portfolio PDF
            </button>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default DashboardPage
