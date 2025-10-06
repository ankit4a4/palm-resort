import React from 'react'
import HeroSection from "../../components/home/HeroSection"
import AllBlogsCards from "../../components/blogs/AllBlogsCards"

const page = () => {
  return (
    <div>
      <HeroSection

        welcomeHeading="PRANAM"
      />
      <AllBlogsCards />
    </div>
  )
}

export default page
