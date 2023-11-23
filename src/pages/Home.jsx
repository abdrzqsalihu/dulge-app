import React from 'react'
import Hero from '../Components/Home/Hero'
import '../Components/Home/Home.css'
import Grid from '../Components/Home/Grid'
import Compartment from '../Components/Home/Compartment'
import Features from '../Components/Home/Features'
import Integration from '../Components/Home/Integration'
import Testimonials from '../Components/Home/Testimonials'
import DownloadAds from '../Components/Home/DownloadAds'
import Subscription from '../Components/Home/Subscription'
import Footer from '../Components/Footer'

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
