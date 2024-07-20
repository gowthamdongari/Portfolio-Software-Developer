import Head from "next/head";
import Layout from "@/components/Layout";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ProfilePic from "../../public/images/profile/profile-picture-bg.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
// import { SpeedInsights } from "@vercel/speed-insights/next"

import About from "./about";
import Projects from "./projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gowtham Dongari | Portfolio </title>
        <meta
          name="description"
          content="Gowtham Dongari, software developer, Southern Methodist University student masters, income tax, gowtham, dongari, full stack developer, open source, Dallas, Urban Rebox"
        />
        <meta name="author" content="Gowtham Dongari" />
        <meta
          name="keywords"
          content="Gowtham Dongari, software developer, Southern Methodist University, SMU, master's student, income tax, Urban Rebox, full stack developer, open source, Dallas"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://gowthamdongari.com" /> {/* Update with your actual URL */}
        <meta property="og:title" content="Gowtham Dongari | Portfolio Page" />
        <meta
          property="og:description"
          content="Gowtham Dongari, software developer, Southern Methodist University student masters, income tax, gowtham, dongari, full stack developer, open source, Dallas, Urban Rebox"
        />
        <meta property="og:url" content="https://gowthamdongari.com" /> {/* Update with your actual URL */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/images/profile/Professional_9.png" /> {/* Update with your actual image path */}
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center text-dark w-full min-h-screen">
        <section className="flex items-center w-full min-h-screen lg:flex-col">
          <Layout className="pt-0 md:pt-16 sm:pt-8">
            <div className="flex items-center w-full min-h-screen lg:flex-col">
              <div className="w-1/2 mr-6 md:w-full">
                <Image
                  src={ProfilePic}
                  alt="Gowtham Dongari"
                  className="w-full h-auto lg:hidden md:inline-block md:w-full"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                <AnimatedText
                  text="Crafting code from Syntax to Success."
                  className="!text-3xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                />
                <p className="flex items-center mt-10 justify-center text-dark font-bold">
                  Hi <span>&#128075;</span>, I am Gowtham Dongari
                </p>
                <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                  I am a Master's student and budding Software Developer
                  bringing ideas to life through imaginative web applications.
                  Dive into my portfolio to discover my latest projects, all
                  reflecting my evolving expertise in software development.
                </p>
                <div className="flex items-center self-start mt-2 lg:self-center">
                  <Link
                    href="../../public/GOWTHAM_Resume.pdf"
                    target="_blank"
                    className="flex items-center bg-black text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                    download={true}
                  >
                    Resume <LinkArrow className={"w-6 ml-1"} />
                  </Link>
                  <Link
                    href="mailto:gowthamdongari@gmail.com"
                    target="_blank"
                    className="ml-4 text-lg font-medium capitalize text-dark underline md:text-base"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Layout>
        </section>

        <section
          id="about"
          className="flex flex-col items-center w-full bg-light"
          
        >
          <About />
        </section>

        <section
          id="projects"
          className="flex flex-col items-center w-full"
        >
          <Projects />
        </section>
      </main>
      {/* <SpeedInsights /> */}
    </>
  );
}
