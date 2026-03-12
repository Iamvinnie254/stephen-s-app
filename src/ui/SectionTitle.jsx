import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6 text-white">
      {children}
    </h2>
  );
};

export default SectionTitle;
