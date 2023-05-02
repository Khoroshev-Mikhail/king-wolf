import { Inter } from 'next/font/google'
import Panel from '@/components/0Panel'
import Header from '@/components/1Header'
import Description from '@/components/2Description'
import Tokenomics from '@/components/3Tokenomics'
import Roadmap from '@/components/4Roadmap'
import Feedback from '@/components/5Feedback'
import Footer from '@/components/6Footer'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Big Wolf</title>
        <meta httpEquiv="content-language" content="en"></meta>
      </Head>
      <div className="h-full min-h-screen absolute z-10 top-0 w-[75%] bg-[url('/images/eclipse-header-left.png')] sm:bg-[url('/images/eclipse-header-left-big.svg')] bg-no-repeat bg-left-top bg-contain"></div>
      <div className="h-full min-h-screen absolute z-10 top-0 right-0 w-[50%] bg-[url('/images/eclipse-header-right.png')] bg-no-repeat bg-right-bottom bg-contain sm:bg-none"></div>
      {/* <Panel /> */}
      <Header />
      <Description />
      <Tokenomics />
      <Roadmap />
      <Feedback />
      <Footer />
    </>
  )
}
