import Container from '@/components/custom/Container'
import GalleryDetailsCards from '@/components/ReUseComp/GalleryDetailsCards'
import React from 'react'

const GalleryDetailsMain = () => {
  return (
    <Container className="grid grid-cols-1 xs:grid-cols-2 mdP:grid-cols-3  xl:grid-cols-4 gap-y-10 md:gap-y-16 gap-x-5 pb-10">
     {
      Array(6).fill().map(()=>(
        <GalleryDetailsCards/>
      ))
     }
    </Container>
  )
}

export default GalleryDetailsMain