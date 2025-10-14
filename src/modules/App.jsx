import React from 'react'
import AlertHeader from '../sections/AlertHeader'
import PurchaseToast from '../components/PurchaseToast'
import Hero from '../sections/Hero'
import Content from '../sections/Content'
import ChampionshipVideo from '../sections/ChampionshipVideo'
import Features from '../sections/Features'
import DifferentialVideo from '../sections/DifferentialVideo'
import Testimonials from '../sections/Testimonials'
import ResultsVideo from '../sections/ResultsVideo'
import FAQ from '../sections/FAQ'
import PresentialCourse from '../sections/PresentialCourse'
import CourseCard from '../sections/CourseCard'
import CTA from '../sections/CTA'
import Footer from '../sections/Footer'
import WhatsappSupport from '../components/WhatsappSupport'

function App() {
  return (
    <div>
      <AlertHeader />
      <main>
        <Hero />
        <ChampionshipVideo />
        <Features />
        <DifferentialVideo />
        <Content />
        <Testimonials />
        <ResultsVideo />
        <CourseCard />
        <FAQ />
        <CTA />
        <PresentialCourse />
      </main>
      <Footer />
      <WhatsappSupport />
      <PurchaseToast />
    </div>
  )
}

export default App


