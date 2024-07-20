import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/E-Comm.png";
import project2 from "../../public/images/projects/Portfolio_website.png";
import project3 from "../../public/images/projects/QuickHire.png";
import project4 from "../../public/images/projects/weather N.png";
import project5 from "../../public/images/projects/Weather app.webp";
import brooklyn from "../../public/images/projects/Brooklyn.png";
import budget from "../../public/images/projects/BudgetBuddy.png";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
        lg:flex-col lg:p-8 xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="shadow-lg absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
        rounded-[2.5rem] rounded-br-3xl bg-dark xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg-pl-0 lg:pt-6">
        <span className="text-iris font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={github}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative xs:p-4
        "
    >
      <div
        className="shadow-lg absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
        rounded-[2rem] rounded-br-3xl bg-dark md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-iris font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={github}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={github}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit{" "}
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            {" "}
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Gowtham Dongari | Projects </title>
        <meta name="description" content="Explore the projects of Gowtham Dongari, a software developer and master's student at Southern Methodist University." />
        <meta name="keywords" content="Gowtham Dongari, projects, software developer, SMU, master's student" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Check Out My Projects!"
            className="mt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="QuickHire Web Application"
                img={project3}
                summary="I developed QUICKHIRE, a full-stack employment web application, from January to May 2024
                         with a team of three at Southern Methodist University. Using Java Spring Boot, React, Tailwind CSS,
                          and Redux, we implemented secure multi-role authentication, an improved job matching algorithm
                           (30% more accurate), and automated email notifications (25% faster response). Axios was used
                            for seamless API communications."
                link="https://github.com/gowthamdongari/QuickHire_fullstackProject"
                github="https://github.com/gowthamdongari/QuickHire_fullstackProject"
                type=""
              />
            </div>
            <div className="col-span-12 ">
              <FeaturedProject
                title="Budget Buddy App"
                img={budget}
                summary="I developed Budget Buddy, a financial management app for tracking expenses, incomes, and
                         shared group expenses similar to Splitwise. Users can authenticate via OAuth,
                          add friends, create groups, and manage shared expenses. The app also supports recording 
                          personal income, tracking partial payments, and settling debts with intuitive dashboard.
                            The tech stack includes React.js, Apollo Client, and gRPC-Web for the frontend; Spring Boot, GraphQL, gRPC, PostgreSQL,
                             Spring Security, and OAuth2 for the backend; and Docker, and CI/CD GitHub Actions for DevOps."
                link="https://github.com/gowthamdongari/budgetbuddy_frontend"
                github="https://github.com/gowthamdongari/budgetbuddy_frontend"
                type=""
              />
            </div>
        
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfolio Website"
                img={project2}
                summary="Crafted a captivating portfolio website with React.js, Next.js, and JavaScript, 
            serving as a dynamic canvas to flaunt my skills and accomplishments, making a statement in the digital world."
                link="https://gowtham-dongari.vercel.app/"
                github="https://github.com/gowthamdongari/Portfolio-Software-Developer"
                type=""
              />
            </div>
          
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Developed Web Application in 24hr Hackathon  "
                img={brooklyn}
                summary="Crafted a captivating portfolio website with React.js, Next.js, and JavaScript,
                 serving as a dynamic canvas to flaunt my skills and accomplishments, making a statement in the digital world."
                link="https://team-curious-stoop-sale.vercel.app/"
                github="https://github.com/gowthamdongari/Team_Curious_Stoop_Sale"
                type=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="E-Commerce Application - Work in Progress"
                img={project1}
                summary="I've built end to end E-comm project, a cutting-edge multi-vendor ecommerce platform utilizing
                         the MERN stack, complemented by the latest technologies such as Tailwind CSS, Socket.io, Redux Toolkit,
                          and more, delivering a seamless online shopping experience."
                link="https://github.com/gowthamdongari/ecommerce-app"
                github="https://github.com/gowthamdongari/ecommerce-app"
                type=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Weather App"
                img={project4}
                summary="I've created a weather application from the ground up, providing real-time weather information
    and forecasts, ensuring users stay informed about current conditions with a user-friendly interface and real time data"
                link="/"
                github="/"
                type=""
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
