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
        <meta httpEquiv="content-language" content="en" />
      </Head>

      <Header />
      <Description />
      <Tokenomics />
      <Roadmap />
      <Feedback />
      <Footer />

    </>
  )
}
