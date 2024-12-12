"use client";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurFade from "@/components/ui/blur-fade";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Timeline } from "@/components/ui/timeline";

export default function About() {
    const data = [
        {
          title: "General",
          content: (
            <div>
              <p className="text-white text-xl font-normal mb-8">
                Hi I am Jun Kai. I am currently stuyding in Dunman High and my CCA is basketball. My team won the NSG Nationals Tournament in 2023.
              </p>
              <div className="">
                <Image
                  src="/dhsnationalchamp.avif"
                  alt="Jun Kai's National Champion Team"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-1/2 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
        {
          title: "Hobbies",
          content: (
            <div>
              <p className="text-white dark:text-neutral-200 text-xl font-normal mb-8">
                I like to watch shows during my freetime, more specifically anime. I watch a variety of animes from romance to action.
              </p>
              <p className="text-white dark:text-neutral-200 text-xl font-normal mb-8">
                My favourite anime is Attack on Titan.
              </p>
              <div className="">
                <Image
                  src="/scale.png"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-1/2 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
        {
          title: "Games",
          content: (
            <div>
              <p className="text-white dark:text-neutral-200 text-xl font-normal mb-4">
                Other than watching shows, I also like to play mobile games during my freetime. 
              </p>
              <p className="text-white dark:text-neutral-200 text-xl font-normal mb-8">
               I mainly play mobile legends and a bit of brawl stars. I have a bunch of other games in my phone that I barely play. 
              </p>
              <div className="">
                <Image
                  src="/mobile-legends.png"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-1/2 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
      ];
  return (
    <section className="bg-black w-screen">
      <div className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          <section id="header">
            <BlurFade delay={0.25} inView>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hello!
              </h2>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <span className="text-4xl text-pretty mx-5">
                My name is Oh Jun Kai
              </span>
            </BlurFade>
          </section>
        </h1>

        <div className="w-screen max-w-screen-lg h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="h-screen w-screen">
        {/* {content.map((item,index)=>(
            <BlurFade inView delay={0.10}>
                <div key={index} className={`h-screen w-screen flex flex-row items-center justify-center ${item.color}`}>
                    <h1 className="font-bold text-white">
                        <span className="text-4xl block my-5">{item.title}</span>
                        <span className="text-xl">{item.description}</span>
                    </h1>
                    <img src={item.image_url} className="w-1/2 h-1/2 img-fluid"></img>
                </div>
            </BlurFade>
        ))} */}
        <Timeline data={data}/>
      </div>
    </section>
  );
}
