import React from 'react'
import Hero from '../component/Hero.jsx'
import Partner from '../component/Partner.jsx'
import Services from '../component/Container.jsx'
import Team from '../component/Team.jsx'
import Work from '../component/Work.jsx'

export default function Home() {
  return (
    <div>
        <Hero/>
        <Partner/>
        <Services/>
        <Team/>
        <Work/>
    </div>
  )
}
