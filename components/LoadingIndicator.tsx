import React from "react";
import Box from "./Box";

const LoadingIndicator = () => {
  return (
	<Box className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen">
      <Box className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-600"></Box>
    </Box>
  );
};

export default LoadingIndicator;