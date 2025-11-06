import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";

export default function FeatureCards() {
  return (
    <section className="container feature-cards">
      <h2 className="section-title">Your Career Is Not Just About Making</h2>

      <div className="feature-grid">
        
        <div className="feature card">
          <img src={f1} alt="" />
          <h3>Understand Working Life</h3>
          <p>A job career refers to the long term professional journey…</p>
          <button className="btn-dark">Learn More</button>
        </div>

        <div className="feature card">
          <img src={f2} alt="" />
          <h3>Professional Growth</h3>
          <p>A job career refers to the long term professional journey…</p>
          <button className="btn-dark">Learn More</button>
        </div>

        <div className="feature card">
          <img src={f3} alt="" />
          <h3>Job Satisfaction</h3>
          <p>A job career refers to the long term professional journey…</p>
          <button className="btn-dark">Learn More</button>
        </div>

      </div>
    </section>
  );
}
