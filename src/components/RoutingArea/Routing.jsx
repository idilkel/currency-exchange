import { Route, Routes } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import Page404 from "./Page404/Page404";
import About from "../About/About";
import Contact from "../Contact/Contact";
import LineChart from "../LineChart/LineChart";
import RateCalculator from "../RateCalculator/RateCalculator";
import "./Routing.css";
import LineChartTest from "../LineChart/LineChartTest";

const Routing = () => {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chart" element={<LineChart />} />
        <Route index element={<LineChart />} />
        <Route path="/test" element={<LineChartTest />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calculator/:currency" element={<RateCalculator />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default Routing;

// <Route path="/tasks/delete/:id" element={<DeleteTodo />} />
