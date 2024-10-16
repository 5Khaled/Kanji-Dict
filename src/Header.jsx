import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-transparent w-full flex items-center gap-5 p-2 backdrop-blur shadow-sm">
      <Link className="flex items-center m-2 gap-2" to="/">
        <img className="size-7" src="/kandiction_logo_white.svg" alt="" />
        <h1 className="text-white text-xl font-bold">Kandiction</h1>
      </Link>
      <nav className={`grow flex flex-row-reverse px-5`}>
        <Link to="/about">
          <h1
            id="about"
            className={`text-white text-opacity-75 can-hover:hover:underline can-hover:hover:text-opacity-100 font-`}
          >
            About
          </h1>
        </Link>
      </nav>
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
