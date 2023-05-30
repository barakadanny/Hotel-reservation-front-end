import React from 'react'
import Featured from '../components/home/Featured'
import Hero from '../components/home/Hero'
import Tour from '../components/home/Tour'
import Testimony from '../components/home/Testimony'
import Articles from '../components/home/Articles'

function Home() {
  return (
    <div>
      <Hero />
      <Featured/>
      <Tour/>
      {/* <Testimony/> */}
      <Articles/>
    </div>
  )
}

export default Home
