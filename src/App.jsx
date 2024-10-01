import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";
import KanjiBackground from "./components/KanjiBackground.jsx";

function App() {
  return (
    <>
      <KanjiBackground />
      {/* <div className="bg-emerald-600 bg-opacity-100 h-full w-full absolute top-0 overflow-hidden -z-20"></div> */}
      <Header />
      <div className="h-[calc(100dvh_-_60px)] relative">
        <Outlet />
      </div>
    </>
  );
}

export default App;
