import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Manrope } from 'next/font/google'
import localFont from 'next/font/local'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const manropeFont = Manrope({ subsets: ['latin'] })
const drukCyrFont = localFont({ src: '../fonts/DrukCyr-Medium.ttf' })
const drukCyrItalicFont = localFont({ src: '../fonts/DrukCyr-Medium-Italic.ttf' })
const drukCyrBoldItalicFont = localFont({ src: '../fonts/DrukCyr-Bold-Italic.ttf' })
const drukCyrBoldFont = localFont({ src: '../fonts/DrukCyr-Bold.ttf' })
const drukCyrHeavyFont = localFont({ src: '../fonts/DrukCyr-Heavy.ttf' })
export const manrope = manropeFont.className
export const drukCyr = drukCyrFont.className
export const drukCyrItalic = drukCyrItalicFont.className
export const drukCyrBoldItalic = drukCyrBoldItalicFont.className
export const drukCyrBold = drukCyrBoldFont.className
export const drukCyrHeavy = drukCyrHeavyFont.className

//Объедени в один
export const drukCyr2 = localFont({
  src: [
    {
      path: '../fonts/DrukCyr-Medium.ttf',
      weight: '400',
      style: 'normal'
    },

    {
      path: '../fonts/DrukCyr-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/DrukCyr-Heavy.ttf',
      weight: '900',
      style: 'normal',
    },
  ]
})

export default function App({ Component, pageProps }: AppProps) {
    useEffect(()=>{
      AOS.init()
  }, [])
  return (
    <main className={`${manrope} bg-my_black text-white`}>
      <Component {...pageProps} />
    </main>
  )
}
