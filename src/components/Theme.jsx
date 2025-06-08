
import React, { useEffect, useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <label className="swap swap-rotate">
      
      <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />

      
      <svg className="swap-on fill-current w-6 h-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M5.64 17.36A9 9 0 0 1 6.34 6.34 9 9 0 0 1 17.36 5.64 9 9 0 0 1 18.66 17.66 9 9 0 0 1 6.34 18.66z" />
      </svg>

      
      <svg className="swap-off fill-current w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M21.64 13A9 9 0 1 1 11 2.36 9 9 0 0 0 21.64 13z" />
      </svg>
    </label>
  );
};

export default Theme;
