import React, { useRef } from 'react'
import {motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    return(
     <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        
        <LiIcon/>
        <div>
            <h3 className='capitalize font-bold text-2xl' >
                {position}&nbsp; 
                <a 
                 href={companyLink}
                 target='_blank'
                 className='text-dark capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </div>
    </li>
)
}


const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

<motion.div 
style={{scaleY: scrollYProgress}}
className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                
                <Details
                position='Associate Software Engineer' company='Urban Rebox It' 
                companyLink=''
                time='2019-2021' address='Hyderabad, India'
                work='As an Associate, I actively participated in software testing, focusing on quality
                 assurance and bug identification. Additionally, I collaborated in utilizing JavaScript to
                  enhance web application features and user interactions, supporting the development team 
                  in achieving robust and responsive solutions.'
                />
                <Details
                position='Software Engineer Intern' company='GreyAtom' 
                companyLink=''
                time='2018-2019' address='Mumbai, India'
                work='Developing projects for data science curriculum related to topics on 
                predictive modelling, python programming, recommender systems and time series
                Writing test cases using unitest framework to improve user experience.'
                />
                <Details
                position='Income Tax Assisstant' company='Income Tax Department' 
                companyLink='https://incometaxindia.gov.in/'
                time='2021-2023' address='Chennai, India'
                work='Led a dynamic team of 4 co-workers to enhance TDS revenue share for the 
                Income Tax Department by leveraging analytical inhouse tools like INSIGHTS and ITBA.
                Strategically executed cross-industry surveys to fuel revenue growth and
                concurrently deployed real-time dashboards for vigilant TDS and Share of Revenue tracking'
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience