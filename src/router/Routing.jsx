import { Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Page404 from "./Page404/Page404";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import LineChart from "../components/LineChart/LineChart";

const Routing = () => {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<App />} /> // if before the 404 page – a
        fallback page – "/" matches all
        <Route path="/home" element={<Home />} />
        <Route index element={<LineChart />} />
        <Route path="/chart" element={<LineChart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default Routing;

// <Route path="/tasks/delete/:id" element={<DeleteTodo />} />
