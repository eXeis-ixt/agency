import React from 'react'
import { Footer, Navbar } from '@/components'

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({children}: Props) => {
  return (
    <div>
         <div className="flex flex-col items-center w-full">
            <Navbar />
            {children}
            <Footer />
        </div>
    </div>
  )
}

export default MarketingLayout