import React, { ReactNode } from 'react';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Box;