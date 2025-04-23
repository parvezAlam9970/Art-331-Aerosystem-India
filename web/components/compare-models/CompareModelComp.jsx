import React from 'react'
import CompareModelsFilter from './CompareModelsFilter'

const CompareModelComp = () => {
  return (
    <div className='my-5 md:my-10 lg:my-16 grid grid-cols-4 gap-5'>
       <div className=' col-span-1 p-5 bg-mgrey'>
        <CompareModelsFilter />
       </div>
       <div className="col-span-3 ">
        filterd cards
       </div> 
    </div>
  )
}

export default CompareModelComp