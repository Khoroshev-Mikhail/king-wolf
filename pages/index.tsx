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
        <meta name="description" content="Shiba inu had an affair with a wolf and a wolf cub was born. His mission is to unite everyone and become the king of memecoins" />
        <link rel="shortcut icon" href="/images/wolf-ticker.png" />
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
