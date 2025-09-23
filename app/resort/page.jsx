import React from 'react'
import HeroSection from "@/components/home/HeroSection"
import DualExperienceShowcase from '@/components/resort/DualExperienceShowcase '
import LuxuryMeetsWellness from '@/components/resort/LuxuryMeetsWellness'
import HaldiAtPalmBliss from '@/components/resort/HaldiAtPalmBliss'
import PhotographySection from '@/components/resort/PhotographySection'
import MehndiSection from '@/components/resort/MehndiSection'
import RingCeremony from '@/components/resort/RingCeremony'
import BirthdayParty from '@/components/resort/BirthdayParty'

const page = () => {
  return (
    <div>
      <HeroSection showHeading="true" welcomeHeading="PRANAM" />
      <DualExperienceShowcase />
      <LuxuryMeetsWellness />
      <HaldiAtPalmBliss />
      <PhotographySection />
      <MehndiSection />
      <RingCeremony />
      <BirthdayParty />

    </div>
  )
}

export default page
