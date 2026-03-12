import React from "react";

const SectionLabel = ({ children }) => {
  return (
    <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
      {children}
    </span>
  );
};

export default SectionLabel;
