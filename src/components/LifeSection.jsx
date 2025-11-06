import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

export default function LifeSection() {
  return (
    <section className="container life-section">

      <div className="life-left card">
        <div className="bar">
          <p>Job New Creator</p>
          <div className="bar-bg"><div className="bar-fill fill1"></div></div>
        </div>

        <div className="bar">
          <p>Job Networking</p>
          <div className="bar-bg"><div className="bar-fill fill2"></div></div>
        </div>

        <div className="bar">
          <p>Job Data Entry</p>
          <div className="bar-bg"><div className="bar-fill fill3"></div></div>
        </div>

        <div className="bar">
          <p>Job Advertising & Sales</p>
          <div className="bar-bg"><div className="bar-fill fill4"></div></div>
        </div>
      </div>

      <div className="life-right">
        <img src={p1} className="card" alt="" />
        <div className="life-small-col">
          <img src={p2} className="card" alt="" />
          <img src={p3} className="card" alt="" />
        </div>
      </div>
    </section>
  );
}
