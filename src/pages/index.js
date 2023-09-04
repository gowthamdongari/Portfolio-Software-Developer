import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import ProfilePic from '../../public/images/profile/profile-picture-bg.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center text-dark w-full min-h-screen'>
            <div className='w-1/2 mr-6'>
              <Image src={ProfilePic} alt="Gowtham Dongari" className='w-full h-auto'/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Crafting code  from Syntax to Success." className='!text-3xl !text-left'/>
              
              <p className='flex items-center mt-10 justify-center text-dark font-bold'>
                Hi <span>&#128075;</span>, I am Gowtham Dongari</p>
              <p className='my-4 text-base font-medium'>
                I am a Master's student and budding Software Developer bringing ideas to life through imaginative web applications.
Dive into my portfolio to discover my latest projects, all reflecting my evolving expertise in software development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/dummy.pdf" target={"_blank"}
                className='flex items-center bg-black text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark'
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:gowthamdongari@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>

        {/* <HireMe/> */}
      </main>
    </>
  )
}
