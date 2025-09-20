"use client";

import {cn} from "@/lib/utils";
import {HTMLAttributes, ReactNode} from "react";
import {motion, MotionProps} from "motion/react";

interface BentoProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export const Bento = ({children, className, ...props}: BentoProps) => {
	return (
		<div
			className={cn(
				"w-full h-full min-h-[40em] grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-rows-auto gap-4",
				className
			)}
			{...props}>
			{children}
		</div>
	);
};

interface BentoItemProps extends MotionProps {
	children: ReactNode;
	className?: string;
}

export const BentoItem = ({children, className, ...props}: BentoItemProps) => {
	return (
		<motion.div
			viewport={{once: true}}
			{...props}
			className={cn("aspect-square overflow-hidden w-full h-full", className)}>
			{children}
		</motion.div>
	);
};
