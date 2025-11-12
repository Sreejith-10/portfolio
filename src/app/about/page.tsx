import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {Chip} from "@/components/ui/chip";
import {Databases, Frameworks, Languages, Libraries} from "@/constants/skills";
import Link from "next/link";

const obj = {
	Languages: Languages,
	Frameworks: Frameworks,
	Libraries: Libraries,
	Databases: Databases,
};

export default function AboutPage() {
	return (
		<div className="w-full h-full py-12">
			{/* About */}
			<section className="prose max-w-full dark:prose-h1:text-primary/80 dark:prose-h2:text-primary/80 dark:prose-p:text-primary/50 prose-sm lg:prose-lg">
				<h1>Hey I&apos;m Lorem.</h1>
				<h2>I&apos;m Lorem, ipsum dolor.</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ab
					possimus ipsum porro eaque ad nesciunt dolorem. Aperiam tempora
					officia mollitia sit minus architecto eum quas deserunt! Obcaecati
					cupiditate neque, sunt voluptatum, fugiat aut cum tenetur unde sed rem
					doloribus corporis amet totam nobis laudantium officia expedita veniam
					odit similique itaque mollitia porro possimus beatae! Minima in
					possimus quasi vel.
				</p>
			</section>
			<br />
			<br />
			{/* Skills */}
			<section className="prose max-w-full dark:prose-h1:text-primary/80 dark:prose-h2:text-primary/80 dark:prose-p:text-primary/50 prose-sm lg:prose-lg">
				<h1>Skills</h1>
				<Accordion type="multiple">
					{Object.entries(obj).map(([key, value]) => (
						<AccordionItem
							value={`item.title:${key}`}
							key={key}
							className="prose prose-h4:m-0 prose-p:m-0 prose-h4:text-primary/60 dark:prose-p:text-primary/50 border-b-primary/40">
							<AccordionTrigger className="hover:no-underline">
								<h4>{key}</h4>
							</AccordionTrigger>
							<AccordionContent className="space-x-3">
								{value.map((v) => (
									<Link
										className="text-primary no-underline hover:underline"
										key={v.ref}
										href={v.ref}
										target="tab">
										{v.name}
									</Link>
								))}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</section>
			<br />
			<br />

			{/* Experience */}
			<section className="prose max-w-full dark:prose-h1:text-primary/80 dark:prose-h2:text-primary/80 dark:prose-p:text-primary/50 prose-sm lg:prose-lg">
				<h1>Experience</h1>

				<div></div>
			</section>
			<br />
			<br />

			{/* Qualification */}
			<section className="max-w-full prose prose-h3:m-0 dark:prose-h1:text-primary/80 dark:prose-h2:text-primary/80 dark:prose-h3:text-primary/50 dark:prose-p:text-primary/50 prose-sm lg:prose-lg prose-h3:text-sm lg:prose-h3:text-lg">
				<h1>Qualification</h1>

				<ul>
					<li className="w-full">
						<div className="flex items-center justify-between">
							<h3>Diploma in Electronics and Communication Enginnering</h3>
							<span className="dark:text-primary/40">2020-2023</span>
						</div>
					</li>
				</ul>
			</section>
		</div>
	);
}
