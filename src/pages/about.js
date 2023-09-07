import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import profilePic from "../../public/images/profile/developer pic.jpg"
import Image from 'next/image'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({value}) =>{
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 3000})
const isInView = useInView(ref, {once:true});

useEffect(()=> {
  if(isInView){
    motionValue.set(value)
  }
}, [isInView, value, motionValue])

useEffect(() => {
  springValue.on("change", (latest) => {
    if(ref.current && latest.toFixed(0) <= value){
      ref.current.textContent = latest.toFixed(0);
    }
  })
}, [springValue, value])


  return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
    <Head>
        <title>Gowtham Dongari | About Page</title>
        <meta name='description' content='any description'/>
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text="Learning Transforms into Real Work!" />
            <div className='grid w-full grid-cols-8 gap-16 mt-16'>
              <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold text-dark/75'>
                  Unveiling My Unique Journey</h2>
                <p className='font-medium'>
                Hi, I'm Gowtham Dongari, a Software Engineering Masters Student at SMU looking for Internship in Summer 2024
  with a dynamic background I've cultivated a diverse skill set that sets me apart. I'm passionate about tackling critical, 
  innovative challenges and using my skill set to solve real-world problems.
                </p>
          
                <p className='font-medium my-4'>
                As you explore my portfolio and learn more about my academic and personal projects, I hope you'll catch a glimpse 
                of my passion and dedication. I'm excited to connect with like-minded individuals, collaborate on exciting ventures,
                and continue this incredible journey of growth and discovery in the world of software engineering.
                </p>

                <p className='font-medium'>
                  Thank you for visiting my website, and I look forward to the opportunities to contribute my skills and passion 
                  to your upcoming projects.
                </p>
              </div >
              <div className=' col-span-3 relative h-max rounded-2xl border-4 border-solid border-dark
              bg-light p-8
              '>
                <div className='shadow-lg absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                  <Image src={profilePic} alt="Gowtham Dongari" className='w-full h-auto rounded-2xl'/>             
                </div> 
                <div className='col-span-2 flex flex-col items-end justify-between'>
                  <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                      <AnimatedNumbers value={10}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>Projects Completed</h2>
                  </div>
                  <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={2}/>
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>Research Papers Published</h2>
                  </div>
                  <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={2}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>Years of Experience</h2>
                  </div>
                </div>
            </div>

            <Skills />
            <Experience/>
            <Education/>
        </Layout>
    </main>

    </>
  )
}

export default about