import { NavLink } from "react-router-dom";
const MainNav = () => {
  const checkIsActive = ({ isActive }) => {
    return {
      display: "block",
      margin: "10px",
      color: isActive ? "Orange" : "black",
      textDecoration: "none",
      fontStyle: "bold",
    };
  };

  return (
    <nav style={{ padding: "2em 0", backgroundColor: "Red" }}>
      <ul
        style={{
          justifyContent: "center",
          fontSize: "2em",
          listStyleType: "none",
          display: "flex",
        }}
      >
        <li>
          <NavLink style={checkIsActive} to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink style={checkIsActive} to="/admin">
            ADMIN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default MainNav;
