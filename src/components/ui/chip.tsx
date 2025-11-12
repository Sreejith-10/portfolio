import {cn} from "@/lib/utils";
import {HTMLAttributes, ReactNode} from "react";

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

export const Chip = ({children, className, ...props}: ChipProps) => {
	return (
		<div className={cn("bg-background/20 inline-block rounded-full py-2 px-4 text-xs border-2 border-primary/20 text-foreground cursor-default", className)} {...props}>
			{children}
		</div>
	);
};
