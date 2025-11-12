type ProjectType = {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	features: {title: string; description: string}[];
	imageRefs: string[];
	liveDemo: string | null;
	github: string | null;
};

export const projects: Readonly<ProjectType[]> = [
	{
		id: 1,
		title: "Scribbly",
		description:
			"lorem adsda Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ut nobis accusantium quisquam vero libero iste ratione necessitatibus unde!",
		technologies: [
			"NextJs",
			"TailwindCSS",
			"NestJs",
			"MongoDB",
			"Redis",
			"Shadcn",
			"Tanstack Query",
		],
		features: [
			{
				title: "Scalability",
				description:
					"lorem adsda Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ut nobis accusantium quisquam vero libero iste ratione necessitatibus unde!",
			},
			{
				title: "Scalability",
				description:
					"lorem adsda Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ut nobis accusantium quisquam vero libero iste ratione necessitatibus unde!",
			},
			{
				title: "Scalability",
				description:
					"lorem adsda Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ut nobis accusantium quisquam vero libero iste ratione necessitatibus unde!",
			},
		],
		imageRefs: [
			"/project-images/scribbly1.png",
			"/project-images/scribbly2.png",
			"/project-images/scribbly3.png",
			"/project-images/scribbly4.png",
			"/project-images/scribbly5.png",
		],
		liveDemo: null,
		github: null,
	},
	{
		id: 2,
		title: "Talent Heaven",
		description:
			"lorem adsda Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ut nobis accusantium quisquam vero libero iste ratione necessitatibus unde!",
		technologies: [
			"NextJs",
			"TailwindCSS",
			"NodeJs",
			"MongoDB",
			"MySQL",
			"Shadcn",
			"Tanstack Query",
		],
		features: [
			{
				title: "Scalability",
				description:
					"lorem adsda Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ut nobis accusantium quisquam vero libero iste ratione necessitatibus unde!",
			},
			{
				title: "Scalability",
				description:
					"lorem adsda Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ut nobis accusantium quisquam vero libero iste ratione necessitatibus unde!",
			},
			{
				title: "Scalability",
				description:
					"lorem adsda Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ut nobis accusantium quisquam vero libero iste ratione necessitatibus unde!",
			},
		],
		imageRefs: [
			"/project-images/talent-heaven1.png",
			"/project-images/talent-heaven2.png",
			"/project-images/talent-heaven3.png",
			"/project-images/talent-heaven4.png",
			"/project-images/talent-heaven5.png",
		],
		liveDemo: null,
		github: null,
	},
	{
		id: 3,
		title: "BlogifyHub",
		description:
			"lorem adsda Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ut nobis accusantium quisquam vero libero iste ratione necessitatibus unde!",
		technologies: ["ReactJs", "NodeJs", "Express", "MongoDB"],
		features: [
			{
				title: "Scalability",
				description:
					"lorem adsda Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ut nobis accusantium quisquam vero libero iste ratione necessitatibus unde!",
			},
			{
				title: "Scalability",
				description:
					"lorem adsda Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ut nobis accusantium quisquam vero libero iste ratione necessitatibus unde!",
			},
			{
				title: "Scalability",
				description:
					"lorem adsda Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ut nobis accusantium quisquam vero libero iste ratione necessitatibus unde!",
			},
		],
		imageRefs: [
			"/project-images/blogifyhub-1.png",
			"/project-images/blogifyhub-2.png",
			"/project-images/blogifyhub-3.png",
			"/project-images/blogifyhub-4.png",
			"/project-images/blogifyhub-5.png",
		],
		liveDemo: null,
		github: null,
	},
];
