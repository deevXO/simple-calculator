import React from "react";

const Button = ({ id, value, onClick, className }) => (
  <button
    id={id}
    onClick={() => onClick(value)}
    className={`rounded-full p-4 text-lg shadow-md bg-gradient-to-r from-indigo-500 to-purple-500 ${className}`}
  >
    {value}
  </button>
);

export default Button;
