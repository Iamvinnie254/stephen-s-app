import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Github from '../components/Github'
import Blog from '../components/Blog'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Home = () => {
  return (
      <>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Github />
          <Blog />
          <Testimonials />
          <Contact/>
      </>
  )
}

export default Home