import Box from "@/components/Box";
import Link from "next/link";
import React from "react";

type HomeLinkProps = {
	title: string;
	subtitle?: string;
	className?: string;
};

const HomeLink = ({ title, subtitle, className, ...props}: HomeLinkProps) => {
	return (
		<Box className={`${className}`} {...props}>
			<Link href="/">
				<span className="text-4xl font-bold">{title}</span>
				{subtitle && <p className="text-lg mb-4">{subtitle}</p>}
			</Link>
		</Box>
	);
}

export default HomeLink;