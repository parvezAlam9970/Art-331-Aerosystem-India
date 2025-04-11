import { Icons } from '@/constants/icons'
import { cn } from '@/lib/utils'
import React from 'react'

const ButtonWrapper = ({className ,children ,isArrow=false, isOutline=false  , ...rest }) => {
  const defaultStyles = isOutline
  ? "border-[1px] border-lgrey text-lgrey bg-transparent"
  : "text-white bg-black"
  return (
    <button className={cn(" flex items-center justify-center py-2 px-5 lg:px-8 gap-2",defaultStyles,className)} {...rest}>
      <p className='text-center'> {children} </p>
      {isArrow && <Icons.ARROW_RIGHT className="-rotate-45 text-lgrey" />}
      
    </button>
  )
}

export default ButtonWrapper