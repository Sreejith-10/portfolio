"use client";

import {useScrollPosition} from "@/hooks/useScrollPosition";
import {TransitionLink} from "./transition-link";

export function Navbar() {
	const pos = useScrollPosition();

	return (
		<div
			className={`${
				pos.y > 0 ? "bg-secondary" : "bg-inherit"
			} w-full h-12 flex justify-between items-center px-4 fixed top-0 z-50`}>
			<h1>Dev</h1>
			<div className="flex gap-3">
				<TransitionLink href={"/"}>Home</TransitionLink>
			</div>
		</div>
	);
}
