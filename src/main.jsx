// import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";

import App from "./App.jsx";
import Index from "./Index.jsx";
import Card from "./components/card/Card.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Index />} />
        <Route path="/kanji/:id" element={<Card />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  // </StrictMode>,
);
