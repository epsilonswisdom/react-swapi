import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="App-header">
      <img
        src='/images/logo.svg'
        style={{ width: "100px", height: "100px" }}
        className="App-logo"
        alt="logo"
      />
			<Link to="/">StarShips</Link>
      <Link to="/starships">List of StarShips</Link>
    </header>
  );
};

export default NavBar;