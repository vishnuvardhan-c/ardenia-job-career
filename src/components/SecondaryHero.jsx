import girlBlue from "../assets/extra1.png";

export default function SecondaryHero() {
  return (
    <section className="container secondary-hero">
      <div className="sec-left">
        <h2 className="section-title">Your Career Is Not Just About Making</h2>
        <p>A career refers to the long-term professional journey…</p>
        <ul>
          <li>Many people spend their lives…</li>
          <li>Your career isn’t just about making…</li>
        </ul>
      </div>

      <img src={girlBlue} className="sec-img card" alt="" />
    </section>
  );
}
