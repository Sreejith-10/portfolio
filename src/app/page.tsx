"use client";

import { About } from "@/components/ui/about";
import { Bento, BentoItem } from "@/components/ui/bento";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, Link2 } from "lucide-react";
import { projects } from "@/constants/projects";
import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import {
  Docker,
  JavaScript,
  Mongo,
  NextJs,
  NodeJs,
  PostgreSql,
  Python,
  ReactJs,
  Redis,
  TailwindCss,
  TypeScript,
} from "@/components/ui/icons";
import { Meteors } from "@/components/ui/meteors";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { ContactForm } from "@/components/ui/contact-form";
import { GITHUB, LINKEDIN, X } from "@/constants/links";
import { FaXTwitter } from "react-icons/fa6";
import { TransitionLink } from "@/components/ui/transition-link";
import Link from "next/link";
import { Transition } from "motion/react";
import { JSX, useEffect, useRef, useState } from "react";

const transition: Transition = {
  ease: "easeInOut",
  duration: 0.75,
  type: "spring",
};

const gridItems: { id: string; size: string; render: () => JSX.Element }[] = [
  {
    id: "about",
    size: "square-big-box",
    render: () => <About />,
  },
  {
    id: "github",
    size: "square-small-box",
    render: () => (
      <Card className="group rounded-3xl w-full h-full hover:bg-purple-600 transition-colors">
        <CardContent className="w-full h-full relative">
          <div className="w-full h-full grid place-content-center">
            <IoLogoGithub className="size-10 group-hover:scale-150 group-hover:text-white transition-transform" />
          </div>
          <div className="absolute bottom-0">
            <Link href={GITHUB} target="tab">
              <Link2 className="hover:opacity-80 group-hover:text-white" />
            </Link>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "twitter",
    size: "square-small-box",
    render: () => (
      <Card className="group rounded-3xl w-full h-full hover:bg-zinc-900 transition-colors">
        <CardContent className="w-full h-full relative">
          <div className="w-full h-full grid place-content-center">
            <FaXTwitter className="size-10 group-hover:scale-150 group-hover:text-white transition-transform" />
          </div>
          <div className="absolute bottom-0">
            <Link href={X} target="tab">
              <Link2 className="hover:opacity-80 group-hover:text-white" />
            </Link>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "skills",
    size: "square-big-box",
    render: () => (
      <Card className="rounded-3xl w-full h-full p-0">
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
          <div className="rounded-3xl from-blue-500/20 absolute inset-0 bg-gradient-to-br to-transparent"></div>
          <div className="bg-blue-500/10 absolute right-0 bottom-0 h-1/3 w-1/3 rounded-full blur-3xl"></div>
          <div className="bg-blue-500/10 absolute top-0 left-0 h-1/4 w-1/4 rounded-full blur-3xl"></div>
          <Meteors className="z-0" />
          <OrbitingCircles iconSize={40} radius={200} className="z-10">
            <TailwindCss />
            <Docker />
            <Redis />
            <NextJs />
          </OrbitingCircles>
          <OrbitingCircles iconSize={30} radius={150} reverse speed={1}>
            <NodeJs />
            <ReactJs />
            <Mongo />
            <JavaScript />
          </OrbitingCircles>
          <OrbitingCircles iconSize={25} radius={100} speed={2}>
            <PostgreSql />
            <Python />
            <TypeScript />
          </OrbitingCircles>
        </div>
      </Card>
    ),
  },
  {
    id: "project-1",
    size: "vertical-box",
    render: () => (
      <Card className="w-full h-full rounded-3xl overflow-hidden bg-amber-300">
        <CardHeader className="z-10">
          <CardTitle>{projects[0].title}</CardTitle>
        </CardHeader>
        <CardContent className="w-full h-full relative">
          <div className="size-[10em] rounded-full bg-blue-500 absolute bottom-28" />
          <div className="w-[100em] absolute bottom-1/2 translate-x-3 -rotate-12">
            <Image
              className="w-fit h-fit shadow-md rounded-md"
              src={projects[0].imageRefs[0]}
              alt="not found"
              width={350}
              height={100}
            />
          </div>
        </CardContent>
        <CardFooter className="z-10">
          <div className="size-9 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xs hover:opacity-80 ">
            <TransitionLink href={"/projects/1"}>
              <ArrowUpRight />
            </TransitionLink>
          </div>
        </CardFooter>
      </Card>
    ),
  },
  {
    id: "project-2",
    size: "horizontal-box",
    render: () => (
      <Card className="w-full h-full rounded-3xl overflow-hidden bg-sky-300">
        <CardHeader className="z-10">
          <CardTitle>{projects[1].title}</CardTitle>
        </CardHeader>
        <CardContent className="w-full h-full relative">
          <div className="size-[10em] rounded-full bg-red-500 absolute bottom-2 right-20" />
          <div className="w-[100em] absolute bottom-1/2 translate-x-28 -rotate-10 bg-transparent">
            <Image
              className="w-fit h-fit rounded-md"
              src={projects[1].imageRefs[0]}
              alt="not found"
              width={350}
              height={100}
            />
          </div>
        </CardContent>
        <CardFooter className="z-10">
          <div className="size-9 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xs hover:opacity-80">
            <TransitionLink href={"/projects/2"}>
              <ArrowUpRight />
            </TransitionLink>
          </div>
        </CardFooter>
      </Card>
    ),
  },
  {
    id: "project-3",
    size: "horizontal-box",
    render: () => (
      <Card className="w-full h-full rounded-3xl overflow-hidden bg-purple-400">
        <CardHeader className="z-10">
          <CardTitle>{projects[2].title}</CardTitle>
        </CardHeader>
        <CardContent className="w-full h-full relative">
          <div className="size-[10em] rounded-full bg-yellow-400 absolute bottom-2 right-20" />
          <div className="w-[15em] md:w-[100em] absolute top-0 translate-x-20 -rotate-0 bg-transparent">
            <Image
              className="w-fit h-fit shadow-md rounded-md"
              src={projects[2].imageRefs[0]}
              alt="not found"
              width={350}
              height={100}
            />
          </div>
        </CardContent>
        <CardFooter className="z-10">
          <div className="size-9 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xs hover:opacity-80 ">
            <TransitionLink href={"/projects/3"}>
              <ArrowUpRight />
            </TransitionLink>
          </div>
        </CardFooter>
      </Card>
    ),
  },
  {
    id: "linkdin",
    size: "square-small-box",
    render: () => (
      <Card className="group rounded-3xl w-full h-full hover:bg-blue-600 transition-colors">
        <CardContent className="w-full h-full relative">
          <div className="w-full h-full grid place-content-center">
            <IoLogoLinkedin className="size-10 group-hover:scale-150 group-hover:text-white transition-transform" />
          </div>
          <div className="absolute bottom-0">
            <TransitionLink href={LINKEDIN}>
              <Link2 className="hover:opacity-80 group-hover:text-white" />
            </TransitionLink>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "addon",
    size: "square-small-box",
    render: () => (
      <Card className="w-full h-full rounded-3xl overflow-hidden bg-red-300"></Card>
    ),
  },
  {
    id: "contact",
    size: "horizontal-box",
    render: () => <ContactForm />,
  },
];

export default function Home() {
  const [positions, setPositions] = useState<
    {
      id: string;
      left: number;
      top: number;
    }[]
  >([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const computeLayout = () => {
      if (!containerRef.current) return;
      let gap = 16;
      let cols = 4;

      const width = window.innerWidth;
      if (width < 768) {
        cols = 2;
        gap = 8;
      } else if (width < 1024) {
        cols = 4;
        gap = 12;
      }

      const containerWidth = containerRef.current.offsetWidth;

      const base = (containerWidth - gap * (cols - 1)) / cols;

      const rows = 12;
      const grid = Array(rows)
        .fill(null)
        .map(() => Array(cols).fill(false));

      const placed = [];

      for (const item of gridItems) {
        let w = 1,
          h = 1;

        if (item.size === "square-big-box" || item.size === "square-big-box") {
          w = 2;
          h = 2;
        } else if (item.size === "horizontal-box") {
          w = 2;
          h = 1;
        } else if (item.size === "vertical-box") {
          w = 1;
          h = 2;
        }

        let found = false;

        for (let y = 0; y <= rows - h && !found; y++) {
          for (let x = 0; x <= cols - w && !found; x++) {
            let fits = true;

            for (let dy = 0; dy < h; dy++) {
              for (let dx = 0; dx < w; dx++) {
                if (grid[y + dy][x + dx]) fits = false;
              }
            }

            if (fits) {
              for (let dy = 0; dy < h; dy++) {
                for (let dx = 0; dx < w; dx++) {
                  grid[y + dy][x + dx] = true;
                }
              }

              placed.push({
                id: item.id,
                left: x * (base + gap),
                top: y * (base + gap),
              });

              found = true;
            }
          }
        }
      }

      setPositions(placed);
    };

    computeLayout();
    window.addEventListener("resize", computeLayout);
    return () => window.removeEventListener("resize", computeLayout);
  }, []);
  console.log(positions);

  return (
    <div className="w-full h-auto grid place-items-center">
      <Bento
        ref={containerRef}
        className="w-[370px] md:w-[800px] lg:w-[1200px] auto relative"
      >
        {positions.map((position) => {
          const item = gridItems.find((item) => item.id === position.id);

          return (
            <BentoItem
              key={item?.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={transition}
              className={`${item?.size} absolute`}
              style={{
                left: position.left,
                top: position.top,
              }}
            >
              {item?.render()}
            </BentoItem>
          );
        })}
      </Bento>
    </div>
  );
}
