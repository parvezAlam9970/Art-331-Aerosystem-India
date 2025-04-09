import Image from 'next/image'
import React from 'react'

const Heading = ({children}) => {
  return (
    <div className='flex justify-center gap-4'>
    <Image src={'/icons/line-left.svg'} width={80} height={20} />
      {children}
    <Image src={'/icons/line-right.svg'} width={80} height={20} />
      
    </div>
  )
}

export default Heading