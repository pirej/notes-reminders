import "./Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const context = useContext(ThemeContext);
  // const { color } = useContext(ThemeContext);

  return (
    <div className="Nav">
      <h2 style={{ color: context.color }}>Hi from Navbar</h2>
      {/* <h2 style={{ color: color }}>Hi from Navbar</h2> */}
    </div>
  );
}

export default Navbar;
