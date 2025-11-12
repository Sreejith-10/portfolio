"use client";

import {MotionProps, motion} from "motion/react";
import {ReactNode} from "react";

interface MotionWrapperProps extends MotionProps {
	children: ReactNode;
}

export const MotionWrapper = ({children, ...props}: MotionWrapperProps) => {
	return <motion.div {...props}>{children}</motion.div>;
};
