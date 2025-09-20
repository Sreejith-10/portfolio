type ProjectType = {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	features: string[];
	imageRefs: string[];
	liveDemo: string | null;
	github: string | null;
};

export const projects: Readonly<ProjectType[]> = [
	{
		id: 1,
		title: "Groover",
		description:
			"lorem adsda Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ut nobis accusantium quisquam vero libero iste ratione necessitatibus unde!",
		technologies: ["ReactJs", "NodeJs", "Express", "MySQL"],
		features: ["Scalability"],
		imageRefs: [],
		liveDemo: null,
		github: null,
	},
	{
		id: 2,
		title: "Groover",
		description:
			"lorem adsda Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ut nobis accusantium quisquam vero libero iste ratione necessitatibus unde!",
		technologies: ["ReactJs", "NodeJs", "Express", "MySQL"],
		features: ["Scalability"],
		imageRefs: [],
		liveDemo: null,
		github: null,
	},
	{
		id: 3,
		title: "Groover",
		description:
			"lorem adsda Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ut nobis accusantium quisquam vero libero iste ratione necessitatibus unde!",
		technologies: ["ReactJs", "NodeJs", "Express", "MySQL"],
		features: ["Scalability"],
		imageRefs: [],
		liveDemo: null,
		github: null,
	},
];
