import React from 'react'

import Heros from "@/components/sections/hero/hero.jsx"
import MainPreks from '@/components/sections/mainPreks.jsx'
import ServiceSection from '@/components/sections/serviceSelection/ServiceSection.jsx'

const page = () => {
  return (
    <>
      <Heros />
      <MainPreks />
      <ServiceSection />
    </>
  )
}

export default page
