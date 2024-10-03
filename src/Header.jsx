// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-transparent w-full flex justify-between items-center p-2 backdrop-blur shadow-sm">
      <Link to="/">
        <h1 className="text-white text-xl font-bold p-2">Kanji Dictionary</h1>
      </Link>
    </header>
  );
}
export default Header;

// function ThemeSwitch() {
//   const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
//     ? "dark"
//     : "light";

//   useEffect(() => {
//     // console.log("Theme: " + localStorage.theme);
//     if (localStorage.theme) {
//       document.documentElement.classList.add(localStorage.theme);
//     } else {
//       localStorage.theme = systemTheme;
//       document.documentElement.classList.add(systemTheme);
//     }
//   });

//   const [theme, setTheme] = useState(
//     localStorage.theme ? localStorage.theme : systemTheme
//   );

//   function changeTheme() {
//     if (localStorage.theme === "dark") {
//       document.documentElement.classList.remove("dark");
//       localStorage.theme = "light";
//       setTheme("light");
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.theme = "dark";
//       setTheme("dark");
//     }
//   }
//   return (
//     <button
//       onClick={changeTheme}
//       className="text-white font-medium py-2 px-3 rounded active:scale-95 transition-transform shadow-[0_5px_5px_-3px_rgba(0,0,0,0.25),_0_-3px_5px_-2px_rgba(255,255,255,0.5)] backdrop-blur-[2px]"
//     >
//       {theme?.toUpperCase()}
//     </button>
//   );
// }
