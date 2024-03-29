import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Zaid Mujahid</title>
      </Head>
      <div className='font-quick'>
        <Navbar />
        <Hero/>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
