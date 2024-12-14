import React from "react";

const Display = ({ input }) => {
  return (
    <div className="w-full h-16 bg-black text-white text-right text-3xl font-mono px-4 py-3 rounded-lg mb-4 overflow-hidden">
      {input}
    </div>
  );
};

export default Display;
