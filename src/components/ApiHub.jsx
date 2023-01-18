import React , {useState} from 'react'
import GettingApis from './GettingApis'

function ApiHub() {
  const [api, setApi] = useState('')
  const [data, setData] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const req = await fetch(`https://api.shrtco.de/v2/shorten?url=${api}`);
    const res = await req.json()
    setData(res.result)
  }
  return (
    <div className='p-10 bg-gray-200 container mt-10'>
      <form className='p-10 bg-[url(/public/images/bg-shorten-desktop.svg)]
      bg-violet-800 flex flex-col sm:flex-row gap-5 rounded-lg -mt-16'
      onSubmit={(e)=>handleSubmit(e)}
      >
        <input type='text'
          className='rounded-lg flex-1 py-3 px-10 outline-none placeholder:text-red-400'
          placeholder='Shortan a link here...' 
          value={api}
          onChange={(e)=> setApi(e.target.value)}
          />
        <button className='rounded-lg text-white bg-emerald-300 py-3 px-10 hover:bg-emerald-200'>Short It!</button>
      </form>
      <div className='flex flex-col gap-5 mt-6'>
        <GettingApis data={data}/>
      </div>
      <div className='my-16 text-center'>
        <h1 className='font-bold text-4xl mb-5 text-gray-800'>Advanced Statistics</h1>
        <p className='text-gray-600'>track how your linls performing across the web with our Advanced Statistics dashboard.</p>
      </div>
      {/* cards  */}
      <div className='flex flex-col md:flex-row items-center gap-20 justify-center'>
        <div className='bg-white p-8 rounded-lg'>
          <img src='/public/images/icon-brand-recognition.svg' className=' bg-violet-900 p-3 rounded-full -mt-16 mx-auto md:mx-0'/>
          <h2 className=' text-3xl my-5 font-bold capitalize'>brand recognition</h2>
          <p className=' text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde magni dolor voluptates illum earum. Veniam voluptatum libero accusantium minus molestiae! Repellat nemo iure eligendi consectetur fugit maiores officiis possimus repellendus?</p>
        </div>
        <div className='bg-white p-8 rounded-lg mt-14 relative'>
          <span className=' hidden md:block bg-emerald-300 w-20 h-3 absolute top-[40%] -left-20'></span>
          <span className=' hidden md:block bg-emerald-300 w-20 h-3 absolute top-[40%] -right-20'></span>
          <img src='/public/images/icon-detailed-records.svg' className=' bg-violet-900 p-3 rounded-full -mt-16 mx-auto md:mx-0'/>
          <h2 className=' text-3xl my-5 font-bold capitalize'>detailed records</h2>
          <p className=' text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde magni dolor voluptates illum earum. Veniam voluptatum libero accusantium minus molestiae! Repellat nemo iure eligendi consectetur fugit maiores officiis possimus repellendus?</p>
        </div>
        <div className='bg-white p-8 rounded-lg mt-28'>
          <img src='/public/images/icon-fully-customizable.svg' className=' bg-violet-900 p-3 rounded-full -mt-16 mx-auto md:mx-0'/>
          <h2 className=' text-3xl my-5 font-bold capitalize'>fully customizable</h2>
          <p className=' text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde magni dolor voluptates illum earum. Veniam voluptatum libero accusantium minus molestiae! Repellat nemo iure eligendi consectetur fugit maiores officiis possimus repellendus?</p>
        </div>
      </div>
    </div>
  )
}

export default ApiHub