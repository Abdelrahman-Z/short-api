import React from 'react'
import {FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter} from "react-icons/fa"
function Footer() {
  return (
    <div className='bg-[#232127] p-10 text-white flex flex-col md:flex-row justify-between'>
      <div>
        <h1 className='text-3xl font-bold mb-10 md:mb-0 text-center md:text-left '>Shortly</h1>
      </div>
      <div className='flex flex-col md:flex-row gap-14 md:gap-28 mb-10 md:mb-0'>
        <div className=' text-center'>
          <span className='font-bold mb-4 block'>Features</span>
          <ul>
            <li className='hover:text-emerald-300 cursor-pointer'>link shorting</li>
            <li className='hover:text-emerald-300 cursor-pointer'>branded links</li>
            <li className='hover:text-emerald-300 cursor-pointer'>analytics</li>
          </ul>
        </div>
        <div className=' text-center'>
          <span className='font-bold mb-4 block'>Resources</span>
          <ul>
            <li className='hover:text-emerald-300 cursor-pointer'>blog</li>
            <li className='hover:text-emerald-300 cursor-pointer'>developers</li>
            <li className='hover:text-emerald-300 cursor-pointer'>support</li>
          </ul>
        </div>
        <div className=' text-center'>
          <span className='font-bold mb-4 block'>company</span>
          <ul>
            <li className='hover:text-emerald-300 cursor-pointer'>about</li>
            <li className='hover:text-emerald-300 cursor-pointer'>our team</li>
            <li className='hover:text-emerald-300 cursor-pointer'>carerrs</li>
            <li className='hover:text-emerald-300 cursor-pointer'>contact</li>
          </ul>
        </div>
      </div>
      <div className=' flex gap-3 justify-center'>
        <FaFacebookSquare  className='hover:text-emerald-300  cursor-pointer'/>
        <FaTwitter className='hover:text-emerald-300 cursor-pointer' />  
        <FaPinterest  className='hover:text-emerald-300 cursor-pointer'/>
        <FaInstagram className='hover:text-emerald-300 cursor-pointer'/>
      </div>
    </div>
  )
}

export default Footer