import React from "react";

const GradientText = ({ children }) => {
  return (
    <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
};

export default GradientText;
