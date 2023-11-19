import React from 'react'
import Hero from '../src/Components/Home/Hero'
import '../src/Components/Home/Home.css'
import Grid from '../src/Components/Home/Grid'
import Compartment from '../src/Components/Home/Compartment'
import Features from '../src/Components/Home/Features'
import Integration from '../src/Components/Home/Integration'
import Testimonials from '../src/Components/Home/Testimonials'
import DownloadAds from '../src/Components/Home/DownloadAds'
import Subscription from '../src/Components/Home/Subscription'
import Footer from '../src/Components/Footer'

function Home() {
  return (
    <div>
      <Hero/>
      <Grid/>
      <Compartment/>
      <Features/>
      <Integration/>
      <Testimonials/>
      <DownloadAds/>
      <Subscription/>
      <Footer/>
    </div>
  )
}

export default Home
