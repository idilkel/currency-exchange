import { Link } from "react-router-dom";
import "./Links.css";

function Links() {
  return (
    <div className="Links">
      <Link to="about">About</Link>
      <span> | </span>
      <Link to="contact">Contact Us</Link>
    </div>
  );
}

export default Links;
