import React from 'react'

function LandingPage() {
  return (
    <div className='flex flex-col sm:flex-row container p-10 items-center justify-between'>
      <div className='flex-1 text-center sm:text-left'>
        <h1 className='font-bold text-6xl text-gray-600 mb-10'>More Than just shorter links</h1>
        <p className='mb-14'>build your brand's recognition and get detailed insights on how your links are performing</p>
        <button className='rounded-full text-white font-bold bg-emerald-300 py-2 px-7 hover:bg-emerald-200'>Get Started</button>
      </div>
      <img src='/public/images/illustration-working.svg' className='sm:w-[40%]' />
      
    </div>
  )
}

export default LandingPage