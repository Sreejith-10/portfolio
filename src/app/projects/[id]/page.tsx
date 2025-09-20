"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import {useParams} from "next/navigation";
import {IoGlobeOutline, IoLogoGithub} from "react-icons/io5";

const images: Record<string, string[]> = {
	1: [
		"/project-images/e-com1.png",
		"/project-images/e-com2.png",
		"/project-images/e-com3.png",
		"/project-images/e-com4.png",
		"/project-images/e-com5.png",
		"/project-images/e-com6.png",
	],
};

const features = [
	{
		title: "Real-time Collaboration",
		description:
			"Work together with your team in real-time. See changes as they happen and never miss an update.",
	},
	{
		title: "Infinite Canvas",
		description:
			"Unlimited space for your ideas. Zoom in for details or out for the big picture.",
	},
	{
		title: "Smart Templates",
		description:
			"Start quickly with pre-built templates for any use case, from brainstorming to project planning.",
	},
	{
		title: "Easy Sharing",
		description:
			"Share your boards with anyone, anywhere. Control permissions and access levels.",
	},
	{
		title: "Cross-platform",
		description:
			"Access your boards from any device. Our apps work seamlessly across desktop, web, and mobile.",
	},
	{
		title: "Enterprise Security",
		description:
			"Keep your data safe with enterprise-grade security and compliance features.",
	},
];

const technologies = [
	"React",
	"Node",
	"Tailwind Css",
	"PostgreSql",
	"Redis",
	"Python",
	"Neovim",
	"NextJs",
	"TypeScript",
];

export default function ProjectPage() {
	const {id}: {id: string} = useParams();
	const urls = images[id];

	return (
		<div className="pt-20">
			{/* Title */}
			<section className="prose dark:prose-h1:text-primary/80 dark:prose-p:text-primary/50">
				<h1>Project Title</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
					officia consectetur perspiciatis natus accusamus blanditiis laudantium
					maiores corporis enim reprehenderit delectus quibusdam cum, at cumque
					exercitationem eum aspernatur magni illo.
				</p>
			</section>
			<br />
			<br />

			{/* References */}
			<section className="prose dark:prose-h2:text-primary/80">
				<h2>Refrences</h2>
				<div className="inline-flex gap-3">
					<div className="w-fit h-fit p-1 bg-primary rounded-full">
						<Link href={"#"}>
							<IoLogoGithub className="text-secondary size-10" />
						</Link>
					</div>
					<div className="w-fit h-fit p-1 bg-primary rounded-full">
						<Link href={"#"}>
							<IoGlobeOutline className="text-secondary size-10" />
						</Link>
					</div>
				</div>
			</section>
			<br />
			<br />

			{/* Techonologies */}
			<section className="prose dark:prose-h2:text-primary/80">
				<h2>Technologies</h2>

				<div className="flex flex-wrap gap-3">
					{technologies.map((tech, index) => (
						<span
							key={index}
							className="text-sm rounded-full px-3 py-2 cursor-pointer bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 border-2 border-foreground/30 dark:border-primary/10">
							{tech}
						</span>
					))}
				</div>
			</section>
			<br />
			<br />

			{/* Features */}
			<section className="prose dark:prose-h2:text-primary/80">
				<h2>Features</h2>
				<Accordion type="multiple">
					{features.map((item, index) => (
						<AccordionItem
							value={item.title}
							key={index}
							className="prose prose-h4:m-0 prose-p:m-0 prose-h4:text-primary/60 dark:prose-p:text-primary/50 border-b-primary/40">
							<AccordionTrigger className="hover:no-underline">
								<h4>{item.title}</h4>
							</AccordionTrigger>
							<AccordionContent>
								<p>{item.description}</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</section>
			<br />
			<br />

			{/* Images */}
			<section className="prose dark:prose-h2:text-primary/80 max-w-fit">
				<h2>Images</h2>
				<div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
					{urls.map((item, index) => (
						<div key={item} className="w-full h-auto">
							<Image
								width={1000}
								height={100}
								alt={`image ${index}`}
								src={item}
								className="object-contain"
								priority
							/>
						</div>
					))}
				</div>
			</section>
			<br />
			<br />
			<br />
		</div>
	);
}
