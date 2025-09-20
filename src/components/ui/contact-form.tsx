"use client";

import {FormEvent} from "react";
import {Button} from "./button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./card";
import {Input} from "./input";

export const ContactForm = () => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formdata = new FormData(e.currentTarget);
		alert(formdata.get("email"));
	};

	return (
		<Card className="group rounded-3xl w-full h-full gap-2 lg:gap-6">
			<CardHeader>
				<CardTitle>Get in touch</CardTitle>
				<CardDescription className="text-xs md:text-sm">
					get in touch for latest updates and news
				</CardDescription>
			</CardHeader>
			<CardContent className="w-full h-full">
				<form
					className="h-full flex flex-col items-start justify-between"
					onSubmit={handleSubmit}>
					<Input
						name="email"
						placeholder="email address"
						className="bg-transparent dark:bg-transparent outline-none rounded-none border-x-0 border-t-0 border-b-primary/50 dark:border-b-primary/20 ring-0 shadow-none focus-visible:ring-0 placeholder:text-gray-400 dark:placeholder:text-gray-500"
					/>
					<Button type="submit" className="rounded-full cursor-pointer">
						Submit
					</Button>
				</form>
			</CardContent>
		</Card>
	);
};
