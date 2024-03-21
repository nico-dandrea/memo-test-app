import Box from "@/components/Box";
import React from "react";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

const Header = ({ title, subtitle, ...props }: HeaderProps) => (
	<Box className={`float-right text-right ${props}`}>
	  <h1 className="text-4xl mb-4 font-bold">{title}</h1>
	  {subtitle && <p className="text-lg mb-8">{subtitle}</p>}
	</Box>
  );
  
export default Header;