import React from 'react'
import { Navbar } from '@/components'

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({children}: Props) => {
  return (
    <div>
         <div className="flex flex-col items-center w-full">
            <Navbar />
            {children}
        </div>
    </div>
  )
}

export default MarketingLayout