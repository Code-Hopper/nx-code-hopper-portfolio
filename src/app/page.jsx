import React from 'react'

import Heros from "@/components/sections/hero/hero.jsx"
import MainPreks from '@/components/sections/mainPreks.jsx'
import ServiceSection from '@/components/sections/serviceSelection/ServiceSection.jsx'
import AboutSection from '@/components/sections/aboutSection'
import StartConversation from '@/components/sections/startConversation'

const page = () => {
  return (
    <>
      <Heros />
      <MainPreks />
      <ServiceSection />
      <AboutSection />
      <StartConversation />
    </>
  )
}

export default page
