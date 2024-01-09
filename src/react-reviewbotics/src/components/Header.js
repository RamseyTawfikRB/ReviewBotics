import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../pictures/Logo.webp";
import "./css/Header.css";

function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div>
            <img className="logo" src={Logo} alt="logo" />
          </div>
          <div className="nav-elements" style={{ color: "black" }}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "green" : "black",
                  })}
                >
                  Home
                </NavLink>{" "}
              </li>

              <li>
                <NavLink
                  to="/pricing"
                  style={({ isActive }) => ({
                    color: isActive ? "green" : "black",
                  })}
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? "green" : "black",
                  })}
                >
                  About
                </NavLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/pricing#section1"
                  style={{ color: "darkgreen" }}
                >
                  Buy RFID
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <NavLink
        to="/pricing"
        style={({ isActive }) => ({ color: isActive ? "green" : "white" })}
      >
        Buy RFID
      </NavLink> */}
    </div>
  );
}

export default Header;
