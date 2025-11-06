import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import x1 from "../assets/x1.png";
import x2 from "../assets/x2.png";

export default function RecommendSection() {
  return (
    <section className="container recommend-section">

      <div className="rec-left">
        <h3>Your Career Is</h3>
        <p>A job career refers to the long term professional journey…</p>

        <div className="rec-grid">
          <div className="rec-card card">
            <img src={r1} alt="" />
            <h4>Professional Video</h4>
          </div>

          <div className="rec-card card">
            <img src={r2} alt="" />
            <h4>Professional Mentorship</h4>
          </div>

          <div className="rec-card card">
            <img src={r3} alt="" />
            <h4>Professional Interview</h4>
          </div>
        </div>
      </div>

      <div className="rec-right">
        <h3>Recommended For You</h3>
        <p>A job career refers to the long term professional journey…</p>

        <div className="rec-right-list">
          <div className="rec-card card">
            <img src={x1} alt="" />
            <h4>Professional Journey</h4>
          </div>

          <div className="rec-card card">
            <img src={x2} alt="" />
            <h4>Professional Jobs</h4>
          </div>
        </div>
      </div>

    </section>
  );
}
