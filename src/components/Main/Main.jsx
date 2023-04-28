import "./Main.css";
import { Outlet } from "react-router-dom";
import Routing from "../RoutingArea/Routing";

const Main = () => {
  return (
    <div className="Main">
      {" "}
      <Routing />
      <Outlet />
    </div>
  );
};

export default Main;
