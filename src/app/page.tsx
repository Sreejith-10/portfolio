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

function delay(ms: number): Promise<unknown> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const transition: Transition = {
  ease: "easeInOut",
  duration: 0.75,
  type: "spring",
};

export default async function Home() {
  await delay(2000);
  return (
    <div className="w-full h-full my-12 grid place-items-center">
      <div className="min-w-auto w-[320px] md:w-[800px] xl:w-[1200px] h-[1992px] md:h-[1192px] xl:h-[1200px] flex items-center justify-center">
        <Bento className="grid-cols-2 md:grid-cols-4 grid-rows-auto">
          {/* About */}
          <BentoItem
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition}
            className="square-big-box col-span-2 col-start-1 row-start-1"
          >
            <About />
          </BentoItem>
          {/* Github */}
          <BentoItem
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition}
            className="square-small-box col-start-3 row-start-1"
          >
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
          </BentoItem>
          {/* Twitter */}
          <BentoItem
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition}
            className="square-small-box col-start-4 row-start-1"
          >
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
          </BentoItem>
          {/* Skills */}
          <BentoItem
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition}
            className="big-sqaure-box col-start-3 row-start-4"
          >
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
          </BentoItem>
          {/* Project */}
          <BentoItem
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition}
            className="vertical-box"
          >
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
          </BentoItem>
          {/* Project */}
          <BentoItem
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition}
            className="horizontal-box col-start-3 row-start-2"
          >
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
          </BentoItem>
          {/* Project */}
          <BentoItem
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition}
            className="horizontal-box w-full h-full rounded-3xl "
          >
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
          </BentoItem>
          {/* Linkdin */}
          <BentoItem
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition}
            className="square-small-box lg:col-start-2 "
          >
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
          </BentoItem>
          {/* Addon */}
          <BentoItem
            className="square-small-box "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition}
          >
            <Card className="w-full h-full rounded-3xl overflow-hidden bg-red-300"></Card>
          </BentoItem>
          {/* Contact */}
          <BentoItem
            className="horizontal-box "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition}
          >
            <ContactForm />
          </BentoItem>
        </Bento>
      </div>
    </div>
  );
}
