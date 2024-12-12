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
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function About() {
  const content = [
    {
      title: "general",
      description: "My name is Jun Kai. I am currently studying in Dunman High and I am Secondary 3 this year. My CCA is basketball and I won the national championship in 2023. ",
      image_url: "/dhsnationalchamp.avif",
      color:"bg-black"
    },
    {
      title: "hobbies",
      description:
        "During my freetime, I like to watch shows, more specifically animes. I watch a variety of anime genres, from romance to action. My favourite action anime is Attack on Titan, while my favourite romance anime is Your Lie in April.",
      image_url: "/scale.png",
      color:"bg-slate-900"
    },
    {
      title: "games",
      description:
        "Other than watching shows, I also like to play mobile games to destress during my freetime. I mainly play mobile legends and a bit of brawl stars. I also have a bunch of other games in my phone that I rarely play.",
      image_url: "/mobilelegends2.webp",
      color:"bg-neutral-900"
    },
    {
      title: "sports",
      description:
        "Other than basketball, I also play a bunch of other sports like Football, Badminton, Table tennis, etc. I was in my primary school team for Table Tennis and won 3rd in the East Zone NSG tournaments. As for the other sports, I just play them for fun.",
      image_url: "/mobilelegends2.webp",
      color:"bg-black",
    },
  ];
  return (
    <section className="bg-black w-screen">
      <div className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          <section id="header">
            <BlurFade delay={0.25} inView>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                About Me
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
        {content.map((item,index)=>(
            <BlurFade inView delay={0.10}>
                <div key={index} className={`h-screen w-screen flex flex-row items-center justify-center ${item.color}`}>
                    <h1 className="font-bold text-white">
                        <span className="text-4xl block my-5">{item.title}</span>
                        <span className="text-xl">{item.description}</span>
                    </h1>
                    <img src={item.image_url} className="w-1/2 h-1/2 img-fluid"></img>
                </div>
            </BlurFade>
        ))}
      </div>
    </section>
  );
}
