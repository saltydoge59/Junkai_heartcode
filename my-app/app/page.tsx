import { Boxes } from "@/components/ui/background-boxes";
import { Card, CardContent, CardDescription, CardHeader , CardTitle} from "@/components/ui/card";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
export interface Artwork {
  artist: string
  art: string
}
 
export const works: Artwork[] = [
  {
    artist: "Cocaine",
    art: "/cocaine.jpg",
  } ,
  {
    artist: "Heroin",
    art: "/heroin.jpeg",
  },
  {
    artist: "Meth",
    art: "/meth-thumb.jpg",
  },
]


export default function Home() {
  return (
    <div>
    {/* <Boxes /> */}
      <h1 className="md:text-4xl text-xl text-white relative z-20">
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    <ScrollArea className="whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img src={artwork.art} className=" object-cover" width={400+'px'} height={400+'px'}></img>
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
      
    </ScrollArea>
    </div>
  );
}