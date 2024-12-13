import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundGradient } from "@/components/ui/background-gradient";
const drugs = [
  {
    name: "Cocaine",
    image: "/cocaine.jpg",
    desc:"Cocaine stimulates the brain. Mental effects may include an intense feeling of happiness, sexual arousal, loss of contact wiht reality, or agitation."
  } ,
  {
    name: "Heroin",
    image: "/heroin.jpeg",
    desc:"Common side effects of heroin include respiratory depression (decreased breathing), dry mouth, drowsiness, impaired mental fuction, constipation, and addiction."
  },
  {
    name: "Meth",
    image: "/meth-thumb.jpg",
    desc:"At very high doses, it can induce pychosis breakdown of skeletal muscle, seizures, and bleeding in the brain."
  },
  {
    name: "Cannabis",
    image: "/cannabis.webp",
    desc:"Cannabis has various mental and physical effects which include euphoria, altered states of mind and sense of time, difficulty concentrating , impaired short-term memory and ipaired body movement."
  },
]

const Card = ({
  image,
  name,
  desc
}: {
  image:string;
  name:string;
  desc:string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-white hover:bg-gray-300",
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <img className="rounded-lg" width="150" height="150" alt="" src={image} />
        <div className="flex flex-col">
          <figcaption className="text-xl font-bold dark:text-white text-center">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{desc}</p>
        </div>
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};


export default function Home() {
  const words = ["Drugs","Cocaine", "Heroine", "Meth", "Cannabis"];
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-screen h-screen"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="text-2xl md:text-6xl mx-auto font-bold text-white mb-4">
        Get high on life, not
        <FlipWords words={words} className="text-red-500"/> <br />
      </div>
      <div className="fixed bottom-0 flex w-screen flex-col items-center justify-center overflow-hidden md:shadow-xl z-20">
        <Marquee pauseOnHover className="[--duration:20s]">
          {drugs.map((drug) => (
            <Card key={drug.name} {...drug}/>
          ))}
        </Marquee>
      </div>
    </div>
    
  );
}
