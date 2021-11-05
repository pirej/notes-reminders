import "./Navbar.css";
import { useTheme } from "../hooks/useTheme";

function Navbar() {
  const { color, changeColor } = useTheme();

  return (
    <div className="Nav" style={{ color: color }}>
      <h2 onClick={() => changeColor("green")}>Hi from Navbar</h2>
    </div>
  );
}

export default Navbar;
