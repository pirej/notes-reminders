import "./Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { color, changeColor } = useContext(ThemeContext);

  return (
    <div className="Nav" style={{ color: color }}>
      <h2 onClick={changeColor}>Hi from Navbar</h2>
    </div>
  );
}

export default Navbar;
