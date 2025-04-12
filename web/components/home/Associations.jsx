import React from 'react'
import Container from '../custom/Container'
import { Icons } from '@/constants/icons'
import Heading from '../ReUseComp/Heading'
import Image from 'next/image'

const Associations = () => {
  return (
    <div>
       <Container className=" my-5 md:my-20">
      <div>
        <div className="flex gap-2 items-center pb-3">
          <Icons.PLANE className=" text-2xl rotate-45" />
          <span className="text-xl md:text-2xl">Associations</span>
        </div>
        <Heading isPlane={false}>
          <b> Some Of Our Associations </b>
        </Heading>
      </div>
      <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-5 mt-5">
         {
            Array(8).fill().map((_,idx)=>{
                return (
                    <div key={ idx} className=" h-full md:h-[145px]">
                       <Image 
                        src="/image/plane2.jpg"
                        width={1000}
                        height={1000}
                        className=" w-full h-full"
                       />
                    </div>
                )
            })
         }
      </div>
    </Container>
    </div>
  )
}

export default Associations