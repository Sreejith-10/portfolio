import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {Chip} from "@/components/ui/chip";
import {projects} from "@/constants/projects";
import {Loader2} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {IoGlobeOutline, IoLogoGithub} from "react-icons/io5";

type PagePropsType<P extends string> = {
	params: Promise<Record<P, string>>;
};

export default async function ProjectPage(props: PagePropsType<"id">) {
	const {id} = await props.params;
	const project = projects.find((pro) => pro.id === parseInt(id, 10));

	if (!project) {
		return <div>no project found</div>;
	}

	return (
		<div className="pt-20">
			{/* Title */}
			<section className="prose max-w-full dark:prose-h1:text-primary/80 dark:prose-p:text-primary/50">
				<div className="lg:grid lg:grid-cols-2 lg:gap-10">
					<div>
						<h1 aria-label="project-title" tabIndex={1}>{project.title}</h1>
						<p>{project.description}</p>
					</div>
					<div className="w-full h-fit hidden lg:block">
						<Image
							className="w-full h-auto"
							src={project.imageRefs[0]}
							alt="notfound"
							width={1000}
							height={1000}
							loading="lazy"
						/>
					</div>
				</div>
			</section>
			<br />
			<br />

			{/* References */}
			{project.github || project.liveDemo ? (
				<>
					<section className="prose dark:prose-h2:text-primary/80">
						<h2>Refrences</h2>
						<div className="inline-flex gap-3">
							{project.github ? (
								<div className="w-fit h-fit p-1 bg-primary rounded-full">
									<Link href={project.github}>
										<IoLogoGithub className="text-secondary size-10" />
									</Link>
								</div>
							) : null}
							{project.liveDemo ? (
								<div className="w-fit h-fit p-1 bg-primary rounded-full">
									<Link href={project.liveDemo}>
										<IoGlobeOutline className="text-secondary size-10" />
									</Link>
								</div>
							) : null}
						</div>
					</section>
					<br />
					<br />
				</>
			) : null}

			{/* Techonologies */}
			<section className="prose dark:prose-h2:text-primary/80">
				<h2>Technologies</h2>

				<div className="flex flex-wrap gap-3">
					{project.technologies.map((tech, index) => (
						<Chip key={index}>{tech}</Chip>
					))}
				</div>
			</section>
			<br />
			<br />

			{/* Features */}
			<section className="prose dark:prose-h2:text-primary/80">
				<h2>Features</h2>
				<Accordion type="multiple">
					{project.features.map((item, index) => (
						<AccordionItem
							value={`item.title:${index}`}
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
					{project.imageRefs.map((url, index) => (
						<div key={url} className="w-full h-auto">
							<Image
								width={1000}
								height={1000}
								alt={`image:${index}`}
								src={url}
								className="w-full h-full object-fill"
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
