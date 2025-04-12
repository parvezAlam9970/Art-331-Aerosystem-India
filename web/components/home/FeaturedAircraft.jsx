import React from 'react'
import FeatureProudctSlider from '../ReUseComp/FeatureProudctSlider'
import Container from '../custom/Container'
import Heading from '../ReUseComp/Heading'
import ButtonWrapper from '../custom/ButtonWrapper'

const FeaturedAircraft = () => {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5 my-5  md:my-10 lg:my-16'>
       <div className='my-6 lg:relative'> 
         <div className=' h-full bg-white shadow-lightShadow lg:ml-16 lg:absolute lg:top-0 w-full z-10 '>
          <Container className={"py-10"}>
           <Heading >
            <b>Featured Aircraft </b> 
           </Heading>
           <Heading isPlane={false} className=" my-5 md:mt-10">
         <b>  Cessna </b> Single Engine <b> Piston Aircraft </b>
           </Heading>
           <p className=' text-sm md:text-base'>
           Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
           </p>
           <div className='mt-5'>
            <ButtonWrapper isOutline={true} isArrow={true}>
                Read More  
            </ButtonWrapper>
           </div>
         </Container>
         </div>
       </div>
       <div>
        <FeatureProudctSlider/>
       </div>
    </div> 
  )
}

export default FeaturedAircraft