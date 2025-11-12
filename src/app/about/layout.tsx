import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
	title: "About",
	description: "about page",
};

export default function ProjectsLayout({
	children,
}: Readonly<{children: ReactNode}>) {
	return (
		<div className="relative w-full min-h-dvh">
			<div className="mx-10 lg:mx-[15em] z-50">{children}</div>
			<div className="from-primary/20 absolute inset-0 bg-gradient-to-br to-transparent -z-10"></div>
			<div className="bg-primary/10 absolute right-0 bottom-0 h-1/3 w-1/3 rounded-full blur-3xl -z-10"></div>
			<div className="bg-primary/10 absolute top-0 left-0 h-1/4 w-1/4 rounded-full blur-3xl -z-10"></div>
		</div>
	);
}
