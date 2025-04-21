import React from 'react'
import Container from '../custom/Container'
import { Input } from '../ui/input'

const ContactComp = () => {
  return (
    <Container className="my-5 md:my-10 lg:my-16 grid grid-cols-5 gap-10">
      <div className=' col-span-2'>
       Testin text
      </div>
      <div className=' col-span-3 shadow-lightShadow px-5 py-8'>
        <form className=' grid grid-cols-2 gap-5'>
           <div>
            <Input placeholder="First Name" />
           </div>
           <div>
           <Input placeholder="Last Name*" />

           </div>
           <div>
           <Input placeholder="Email Address*" />

           </div>
           <div>
           <Input placeholder="Phone Number (Optional)" type="number" min={0} />

           </div>
           <div>
           <Input placeholder="ZIP / Postal Code (Optional)"  type="number" min={0}/>

           </div>
           <div>form fileds</div>
        </form>
      </div>
    </Container>
  )
}

export default ContactComp