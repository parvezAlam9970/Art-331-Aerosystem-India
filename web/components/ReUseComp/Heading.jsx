import { Icons } from '@/constants/icons'
import { cn } from '@/lib/utils'
import React from 'react'

const Heading = ({children,className,isPlane=true,...rest}) => {
  return (
    <h2 className={cn(" text-[22px] sm:text-[24px] flex gap-2  md:text-[28px] lg:text-[34px] ",className)} {...rest}>
    {isPlane && <span>
        <Icons.PLANE className="rotate-45"/>
    </span> }
        {children}
    </h2>
  )
}

export default Heading