export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2 className="logo-footer">Ardenia</h2>
          <p>A job career refers to the long term professional journey…</p>
        </div>

        <div>
          <h4>Menu</h4>
          <p>Home<br/>About Us<br/>Contact</p>
        </div>

        <div>
          <h4>Explore</h4>
          <p>Resources<br/>Blog<br/>Documents</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>FAQ<br/>Account Settings</p>
        </div>

        <div>
          <h4>Newsletter</h4>
          <input type="text" placeholder="Email" className="news-input" />
        </div>
      </div>

      <div className="footer-bottom">© Ardenia. All Rights Reserved.</div>
    </footer>
  );
}
