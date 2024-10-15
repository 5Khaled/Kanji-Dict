import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="relative min-h-dvh flex flex-col">
      <div className="fixed top-0 size-full -z-20 bg-gradient-to-br from-emerald-600 to-teal-600 "></div>
      <Header />
      <main className="min-h-outlet-dvh flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
