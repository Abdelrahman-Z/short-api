import {useState} from 'react'
import { FaBars } from 'react-icons/fa'
function Header() {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      <div className='flex justify-between container p-10 font-bold items-center ' >
      <div className='flex flex-row flex-wrap items-center flex-1'>
        <img src='/public/images/logo.svg'/>
        <ul className={`sm:flex sm:flex-row list-none ml-5 gap-5 text-gray-400 hidden`}>
          <li className='hover:text-gray-600'><button>Features</button></li>
          <li className='hover:text-gray-600'><button>Pricing</button></li>
          <li className='hover:text-gray-600'><button>Resources</button></li>
        </ul>
      </div>
      <FaBars className='sm:hidden'  onClick={()=> setClicked(state => !state)}/>
      <div className='sm:flex flex-row flex-wrap gap-5 text-gray-400 hidden items-center'>
        <button>Login</button>
        <button className='rounded-full text-white bg-emerald-300 py-2 px-3 hover:bg-emerald-200'>Sign Up</button>
      </div>
  </div>
      {clicked &&
        <ul className='text-white bg-violet-900 font-bold p-10 text-center mx-10 rounded-lg flex flex-col gap-5'>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
            <hr className='bg-gray-300' />
          <li>Login</li>
          <li className=' bg-emerald-300 px-3 py-2 rounded-full'>Sign Up</li>
        </ul>
      }
    </>
  )
}

export default Header