"use client";

import Link, {LinkProps} from "next/link";
import {useRouter} from "next/navigation";
import {MouseEvent, ReactNode} from "react";

interface TransitionLinkProps extends LinkProps {
	children: ReactNode;
	href: string;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const TransitionLink = ({
	children,
	href,
	...props
}: TransitionLinkProps) => {
	const router = useRouter();

	const handleTransition = async (
		e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
	) => {
		e.preventDefault();
		const body = document.querySelector("body");
		body?.classList.add("page-transition");

		await sleep(500);
		router.push(href);
		await sleep(500);

		body?.classList.remove("page-transition");
	};

	return (
		<Link {...props} href={href} onClick={handleTransition}>
			{children}
		</Link>
	);
};
