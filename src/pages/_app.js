import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import {Montserrat} from "next/font/google"
import Head from 'next/head'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Gowtham Dongari" />
        <meta name="keywords" content="Gowtham Dongari, software developer, Southern Methodist University, SMU, master's student, income tax, Urban Rebox, full stack developer, open source, Dallas" />
        <link rel="canonical" href="https://gowthamdongari.com" /> {/* Update with your actual URL */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/images/profile/Professional_9.png" /> {/* Update with your actual image path */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode='wait'>
        <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
