"use client";

import {useRef} from "react";
import {flushSync} from "react-dom";
import {Button} from "./button";
import {Moon, Sun} from "lucide-react";
import {cn} from "@/lib/utils";
import {useTheme} from "next-themes";

type Props = {
	className?: string;
};

export const ThemeToggle = ({className}: Props) => {
	const {theme, setTheme} = useTheme();
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	const changeTheme = async () => {
		if (!buttonRef.current) return;

		await document.startViewTransition(() => {
			flushSync(() => {
				const dark = document.documentElement.classList.toggle("dark");
				setTheme(dark ? "dark" : "light");
			});
		}).ready;

		const {top, left, width, height} =
			buttonRef.current?.getBoundingClientRect();

		const y = top + height / 2;
		const x = left + width / 2;

		const right = window.innerWidth - left;
		const bottom = window.innerHeight - top;
		const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

		document.documentElement.animate(
			{
				clipPath: [
					`circle(0px at ${x}px ${y}px)`,
					`circle(${maxRad}px at ${x}px ${y}px)`,
				],
			},
			{
				duration: 500,
				easing: "ease-in-out",
				pseudoElement: "::view-transition-new(root)",
			}
		);
	};
	return (
		<Button
			aria-label="theme-toggle"
			ref={buttonRef}
			className={cn(className, "rounded-full p-1")}
			onClick={changeTheme}>
			{theme === "dark" ? <Sun /> : <Moon />}
		</Button>
	);
};
