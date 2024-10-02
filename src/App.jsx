import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-gradient-to-br from-emerald-600 to-teal-600 min-h-dvh flex flex-wrap items-start">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
