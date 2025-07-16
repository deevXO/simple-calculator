import React, { useState, useEffect } from "react";

const App = () => {
  const [input, setInput] = useState("0");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("0");
    } else if (value === "CE") {
      setInput(input.slice(0, -1) || "0");
    } else if (value === "%") {
      try {
        setInput((parseFloat(input) / 100).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input === "0" ? value : input + value);
    }
  };

  const handleKeyDown = (event) => {
    const key = event.key;
    if (!isNaN(key) || key === ".") {
      setInput((prev) => (prev === "0" ? key : prev + key));
    } else if (key === "Backspace") {
      setInput((prev) => prev.slice(0, -1) || "0");
    } else if (["+", "-", "*", "/"].includes(key)) {
      setInput((prev) => prev + key);
    } else if (key === "%") {
      try {
        setInput((prev) => (parseFloat(prev) / 100).toString());
      } catch {
        setInput("Error");
      }
    } else if (key === "Enter" || key === "=") {
      try {
        setInput((prev) => eval(prev).toString());
      } catch {
        setInput("Error");
      }
    } else if (key === "Escape") {
      setInput("0");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const buttons = [
    { label: "C", id: "clear" },
    { label: "CE", id: "clear-entry" },
    { label: "%", id: "percent" },
    { label: "/", id: "divide" },
    { label: "7", id: "seven" },
    { label: "8", id: "eight" },
    { label: "9", id: "nine" },
    { label: "*", id: "multiply" },
    { label: "4", id: "four" },
    { label: "5", id: "five" },
    { label: "6", id: "six" },
    { label: "-", id: "subtract" },
    { label: "1", id: "one" },
    { label: "2", id: "two" },
    { label: "3", id: "three" },
    { label: "+", id: "add" },
    { label: "0", id: "zero", span: 2 },
    { label: ".", id: "decimal" },
    { label: "=", id: "equals" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 flex flex-col items-center justify-center text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-800 to-purple-600 animate-pulse opacity-70"></div>
      <div className="w-96 p-6 bg-gradient-to-b from-gray-700 to-gray-900 rounded-3xl shadow-2xl relative z-10">
        <div
          className="bg-black text-white text-right p-4 rounded-md text-3xl font-mono break-words h-24 flex items-center justify-end overflow-hidden"
          style={{ wordWrap: "break-word", whiteSpace: "pre-wrap" }}
        >
          {input}
        </div>
        <div className="grid grid-cols-4 gap-4 mt-6">
          {buttons.map((btn, index) => (
            <button
              key={index}
              id={btn.id}
              className={`${
                btn.span ? "col-span-2" : ""
              } bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg py-5 text-3xl font-semibold hover:scale-105 transform active:scale-95 transition-all duration-300 relative shadow-lg hover:shadow-xl focus:outline-none`}
              onClick={() => btn.label && handleButtonClick(btn.label)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
      <footer className="absolute bottom-6 text-gray-400 text-sm font-mono tracking-wide z-10">
        Created by <a href="https://github.com/deevXO" target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-semibold">Deevanshu Kapoor</a>
      </footer>
    </div>
  );
};

export default App;
