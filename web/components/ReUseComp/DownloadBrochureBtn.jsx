import { Icons } from '@/constants/icons'
import React from 'react'

const DownloadBrochureBtn = () => {
  return (
    <div className='bg-[#E3E3E3] rounded-xl flex gap-3 p-2 md:p-3 pr-8 md:pr-12'>
      <div className='p-2 md:p-4 bg-[#bebebe] rounded-xl flex justify-center items-center text-center'>
        <Icons.PDF className=" text-[25px] md:text-[35px] text-grey" />
      </div>
      <div>
        <span className=' text-[18px] md:text-[21px] font-semibold'>Download brochure</span>
        <div className=' flex gap-2'>
          <a 
            href="/image/plane2.jpg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='hover:underline transition-all duration-300 ease-in-out text-lgrey '
          >
            View
          </a>
          <a 
            href="/image/plane2.jpg" 
            rel="noopener noreferrer" 
            download
            className='hover:underline transition-all duration-300 ease-in-out text-lgrey flex gap-2 items-center text-center'
          >
            Download
            <Icons.DOWNLOAD/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default DownloadBrochureBtn
