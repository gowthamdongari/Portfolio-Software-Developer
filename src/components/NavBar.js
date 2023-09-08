import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '@/components/Logo'
import { useRouter } from 'next/router'
import Icon, { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from '@/components/Icons'
import {motion} from "framer-motion";
import about from '../pages/about'

const CustomLink = ({href, title, className=""}) =>{
  const router =useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`
      h-1 inline-block bg-dark
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({href, title, className="", toggle}) =>{
  const router =useRouter();

  const handleClick =() =>{
    toggle();
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group`} onClick={handleClick}>
      {title}

      <span className={`
      h-1 inline-block bg-dark
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>&nbsp;</span>
    </button>
  )
}

const NavBar = () => {

 const [isOPen, setisOPen] = useState(false);

 const handleClick = () =>{
  setisOPen(!isOPen)
 }

  return (
    <header
    className='w-full px-32 py-8 font-medium flex items-center justify-between
    relative'
    >
    <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
      <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOPen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span >
      <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOPen? 'opacity-0' : 'opacity-100'}`}></span >
      <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOPen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span >
    </button>

    <div className='w-full flex justify-between items-center lg:hidden'>
    <nav>
        <CustomLink href="/" title="Home" className='mr-4' />
        <CustomLink href="/about" title="About" className='mx-4'/>
        <CustomLink href="/projects"title="Projects" className='mx-4'/>
        {/* <CustomLink href="/articles"title="Articles" className='ml-4'/> */}
      </nav>
      
      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href="https://twitter.com" target={"_blank"}
        whileHover={{y:-2 }}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        >
          
          <GithubIcon/>
        </motion.a>
        <motion.a href="https://github.com/gowthamdongari" target={"_blank"}
        whileHover={{y:-2 }}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        >
          <LinkedInIcon/>
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/gowthamdongari/" target={"_blank"}
        whileHover={{y:-2 }}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        >
          <TwitterIcon/>
        </motion.a>
        <motion.a href="https://twitter.com" target={"_blank"}
        whileHover={{y:-2 }}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        >
          {/* <PinterestIcon/>
        </motion.a>
        <motion.a href="https://twitter.com" target={"_blank"}
        whileHover={{y:-2 }}
        whileTap={{scale:0.9}}
        className="w-6 "
        > */}
          {/* <DribbbleIcon/> */}
        </motion.a>
        
      </nav>
    </div>  

    {
      isOPen ?

      <div className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 lef-1/2 
    -translate-x-1/2 -translate-y-1/2 bg-dark/70 rounded-lg backdrop-blur-md py-32'>
    <nav className='flex items-center flex-col justify-center' >
        <CustomMobileLink href="/" title="Home" className='mr-4' toggle={handleClick}/>
        <CustomMobileLink href="/about" title="About" className='mx-4' toggle={handleClick}/>
        <CustomMobileLink href="/projects"title="Projects" className='mx-4' toggle={handleClick}/>
        {/* <CustomMobileLink href="/articles"title="Articles" className='ml-4' toggle={handleClick}/> */}
      </nav>
      
      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href="https://github.com/gowthamdongari" target={"_blank"}
        whileHover={{y:-2 }}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        >
          
          <GithubIcon/>
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/gowthamdongari/" target={"_blank"}
        whileHover={{y:-2 }}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        >
          <LinkedInIcon/>
        </motion.a>
        <motion.a href="https://twitter.com" target={"_blank"}
        whileHover={{y:-2 }}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        >
          <TwitterIcon/>
        </motion.a>
        {/* <motion.a href="https://github.com/gowthamdongari" target={"_blank"}
        whileHover={{y:-2 }}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        > */}
          {/* <PinterestIcon/>
        </motion.a>
        <motion.a href="https://twitter.com" target={"_blank"}
        whileHover={{y:-2 }}
        whileTap={{scale:0.9}}
        className="w-6 "
        > */}
          {/* <DribbbleIcon/> */}
        {/* </motion.a> */}
        
      </nav>
    </div>

      :null
    } 

      <div className='absolute left-[50%] top-2 translate-x-[-50%]' >
      <Logo />
      </div>

    </header>
  )
}

export default NavBar