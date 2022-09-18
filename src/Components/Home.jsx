import React from 'react'
import Hero from './Home/Hero'
import '../Components/Home/Home.css'
import Grid from './Home/Grid'
import Compartment from './Home/Compartment'
import Features from './Home/Features'
import Integration from './Home/Integration'
import Testimonials from './Home/Testimonials'
import DownloadAds from './Home/DownloadAds'
import Subscription from './Home/Subscription'
import Footer from './Footer'

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
