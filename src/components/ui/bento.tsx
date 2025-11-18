"use client";

import {cn} from "@/lib/utils";
import {HTMLAttributes, ReactNode, Ref} from "react";
import {motion, MotionProps} from "motion/react";

interface BentoProps extends HTMLAttributes<HTMLDivElement> {
	ref: Ref<HTMLDivElement>;
	className?: string;
}

export const Bento = ({ref, children, className, ...props}: BentoProps) => {
	return (
		<div className={cn("", className)} ref={ref} {...props}>
			{children}
		</div>
	);
};

interface BentoItemProps extends Partial<MotionProps> {
	children: ReactNode;
	className?: string;
}

export const BentoItem = ({children, className, ...props}: BentoItemProps) => {
	return (
		<motion.div
			viewport={{once: true}}
			{...props}
			className={cn("", className)}>
			{children}
		</motion.div>
	);
};
