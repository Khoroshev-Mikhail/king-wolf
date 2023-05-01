import { Inter } from 'next/font/google'
import Panel from '@/components/0Panel'
import Header from '@/components/1Header'
import Description from '@/components/2Description'
import Tokenomics from '@/components/3Tokenomics'
import Roadmap from '@/components/4Roadmap'
import Feedback from '@/components/5Feedback'
import Footer from '@/components/6Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Panel />
      <Header />
      <Description />
      <Tokenomics />
      <Roadmap />
      <Feedback />
      <Footer />
    </main>
  )
}
