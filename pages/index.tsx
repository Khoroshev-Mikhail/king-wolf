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
        <title>King Wolf</title>
        <meta httpEquiv="content-language" content="en" />
        <link rel="shortcut icon" href="/images/wolf-ticker.svg" />
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
