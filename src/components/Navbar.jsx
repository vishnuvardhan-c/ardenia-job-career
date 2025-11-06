export default function Navbar() {
  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="nav-left">
          <h2 className="logo">Ardenia</h2>
          <ul className="nav-links">
            <li>Home</li>
            <li>Contact</li>
            <li>About Us</li>
            <li>Testimonial</li>
            <li>Jobs</li>
          </ul>
        </div>

        <div className="nav-right">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="btn-outline">Login</button>
        </div>
      </nav>
    </div>
  );
}
