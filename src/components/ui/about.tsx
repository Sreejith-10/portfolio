import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./card";
import {TransitionLink} from "./transition-link";

export const About = () => {
	return (
		<Card className="w-full h-full bg-primary/10 rounded-4xl relative gap-2 lg:gap-6">
			<div className="absolute inset-0 -z-10 rounded-4xl">
				<div className="rounded-4xl from-primary/20 absolute inset-0 bg-gradient-to-br to-transparent"></div>
				<div className="bg-primary/10 absolute right-0 bottom-0 h-1/3 w-1/3 rounded-full blur-3xl"></div>
				<div className="bg-primary/10 absolute top-0 left-0 h-1/4 w-1/4 rounded-full blur-3xl"></div>
			</div>
			<CardHeader>
				<CardTitle className="prose prose-sm lg:prose-lg prose-h1:m-0 prose-h1:text-lg md:prose-h1:text-2xl prose-h2:m-0">
					<h1 className="dark:text-accent-foreground/80">
						Hey I&apos;m{" "}
						<b className="prose text-accent-foreground m-0 text-xl md:text-4xl">
							Sreejith
						</b>
					</h1>
					<h2 className="dark:text-accent-foreground/60">
						Full Stack Developer
					</h2>
				</CardTitle>
			</CardHeader>
			<CardContent className="md:mt-5">
				<CardDescription className="prose prose-p:text-xs xl:prose-p:text-lg lg:prose-sm dark:text-secondary-foreground/50 line-clamp-[9]">
					<p className="prose sm:prose-p:text-[1px] xl:prose-p:text-lg lg:prose-sm dark:text-secondary-foreground/50 line-clamp-[9]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
						quisquam consequatur tempora voluptate voluptas iste nobis
						distinctio, sed, totam cum doloribus placeat aliquid aperiam
						quaerat? Mollitia fugiat provident accusantium quam ex odio facere
						natus minima voluptatibus nostrum. Pariatur.
					</p>
				</CardDescription>
			</CardContent>
			<CardFooter className="h-full relative">
				<TransitionLink
					href={"/about"}
					className="prose inline-grid place-content-center whitespace-nowrap text-sm font-medium h-9 px-4 py-2 bg-foreground text-accent rounded-full absolute bottom-0 shadow-md cursor-pointer hover:underline">
					About
				</TransitionLink>
			</CardFooter>
		</Card>
	);
};
