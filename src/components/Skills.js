import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            py-3 px-6 shadow-dark cursor-pointer absolute
            '
            whileHover={{scale:1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y }}
            transition={ {duration: 1.5}}
            viewport={{once: true}}
            >
                {name}
            </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer
            '
            whileHover={{scale:1.05}}
            >
                SDE
            </motion.div>

            <Skill name="Python " x="-24vw" y="2vw"/>
            <Skill name="Javascript " x="-5vw" y="-10vw"/>
            <Skill name="SQL " x="20vw" y="6vw"/>
            <Skill name="AWS " x="0vw" y="11vw"/>
            <Skill name="ReactJS " x="-18vw" y="-15vw"/>
            <Skill name="NextJS " x="15vw" y="-12vw"/>
            <Skill name="HTML " x="30vw" y="-5vw"/>
            <Skill name="CSS (TailwindCSS) " x="0vw" y="-21vw"/>
            <Skill name="C++ " x="-23vw" y="18vw"/>
            <Skill name="Git " x="20vw" y="18vw"/>

            
            
        </div> 
    </>
  )
}

export default Skills