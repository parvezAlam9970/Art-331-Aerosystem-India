import { cn } from '@/lib/utils'
import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={cn("mx-auto w-full max-w-custom-xl px-5 lg:px-7 xl:px-16", className)}>{children}</div>
  )
}

export default Container