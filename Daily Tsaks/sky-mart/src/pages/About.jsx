import React from 'react'
import Hero from '../components/about/Hero'
import Stats from '../components/about/Stats'
import Story from '../components/about/Story'
import Values from '../components/about/Values'
import Team from '../components/about/Team'
import CTA from '../components/about/CTA'

const About = () => {
  return (
    <div className="text-white px-30">
      <Hero />
      <Stats />
      <Story />
      <Values />
      <Team />
      <CTA />
    </div>
  )
}

export default About