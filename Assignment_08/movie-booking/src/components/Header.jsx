import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <h1 className="logo">🎬 MovieBook</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Movies</Link>
      </nav>
    </header>
  );
}

export default Header;
