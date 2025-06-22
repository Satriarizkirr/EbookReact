import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    // Kita kembalikan div pembungkus utama
    <div>
      <header className='header'>
        {/* Logo yang sudah bisa diklik */}
        <div className="logo">
          <Link to="/">
            <h2 className="website--title">
              📚 MYEBOOKS
            </h2>
          </Link>
        </div>
        
        {/* Bagian navigasi lainnya */}
        <div className="navigation">
          <input type="checkbox" className="toggle-menu" />
          <div className="hamburger"></div>
          <ul className="menu">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/overview">MAP</Link>
            </li>
            <li>
              <Link to="/books">BOOKS</Link>
            </li>
            <li>
              <Link to="/authors">AUTHORS</Link>
            </li>
            <li>
              <Link to="/quotes">QUOTES</Link>
            </li>
            <li>
              <Link to="/aboutme">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}