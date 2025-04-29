import React from 'react'
import ButtonWrapper from './ButtonWrapper'
import Link from 'next/link'

const SideButton = () => {
  return (
    <div className=' fixed top-1/2 right-[-108px] lg:right-[-109px] group z-20 rotate-180'>
    <Link href={'/flying-schools-and-clubs'}>
     <ButtonWrapper className=" rotate-90  lg:px-6 z-10" >
        FLYING SCHOOLS AND CLUBS
       
     </ButtonWrapper> <div className="absolute inset-0 rotate-90 -z-10  before:content-[''] before:absolute before:inset-[-8px] before:bg-blue-100 before:opacity-0 group-hover:before:opacity-80 before:transition-all before:duration-300 before:rounded-sm"></div>
     </Link>
    </div>
  )
}

export default SideButton