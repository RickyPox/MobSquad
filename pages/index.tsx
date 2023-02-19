
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import About from '../components/About'
import Join from '../components/Join'
import Team from '../components/Team'
import FAQ from '../components/FAQ'


export default function Home(){

  return (
    <div>
      <Head>
        <title>MobSquad</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Join></Join>
      <Team></Team>
      <FAQ></FAQ>
      
    </div>
  )
}


