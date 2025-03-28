import React from 'react'

import Heros from "@/components/sections/hero/hero.jsx"
import MainPreks from '@/components/sections/mainPreks.jsx'
import ServiceSection from '@/components/sections/serviceSelection/ServiceSection.jsx'
import AboutSection from '@/components/sections/aboutSection'

const page = () => {
  return (
    <>
      <Heros />
      <MainPreks />
      <ServiceSection />
      <AboutSection />
    </>
  )
}

export default page
