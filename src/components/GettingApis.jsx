import React , {useRef, useState} from 'react'

function GettingApis({ data }) {
  const { short_link, full_short_link } = data || {}
  const [clicked, setClicked] = useState(false)
  const copyText = useRef()
  const handleClick = () => {
    setClicked(true);
    const { textContent } = copyText.current;
    navigator.clipboard.writeText(textContent)
  }
  return (
    <>
      {data ?
        <div className='flex flex-col justify-between items-center bg-white p-5 font-bold'>
          <div className='flex justify-between w-full flex-col sm:flex-row'>
            <span className=' border-b-gray-300 border-b-2 sm:border-b-0 my-1'>{full_short_link}</span>
            <div className='flex flex-col sm:flex-row items-center justify-between'>
              <span className=' my-1 text-emerald-300' ref={copyText}>{short_link}</span>
              <button
                className={` my-1 text-white rounded-lg ${ clicked ? ' bg-violet-800':'bg-emerald-300' } sm:ml-5 py-2 px-4 w-full`}
                onClick={handleClick}>{clicked ? 'copied' : 'copy' }</button>
            </div>
          </div>
        </div>
        :
        <div></div>
      }
    </>
  )
}

export default GettingApis