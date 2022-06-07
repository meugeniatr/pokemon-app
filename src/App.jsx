import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home  from "./pages/Home";

export const App = () => (
  <div className="w-screen h-screen flex items-center justify-center">
    <div>
      <h1 className="font-bold text-lg">Hello Start React + Storybook + TailwindCSS</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  </div>
);
