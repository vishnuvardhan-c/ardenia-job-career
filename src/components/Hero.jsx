import hero from "../assets/hero.png";
import av1 from "../assets/av1.png";
import av2 from "../assets/av2.png";
import av3 from "../assets/av3.png";
import av4 from "../assets/av4.png";
import av5 from "../assets/av5.png";

export default function Hero() {
  return (
    <section className="container hero">
      <div className="hero-left">
        <span className="badge">In today’s competitive world</span>

        <h1 className="hero-title">
          The Journey To <br /> A Fulfilling <br /> Career
        </h1>

        <p className="hero-desc">
          A job career refers to the long-term professional journey…
        </p>

        <div className="hero-buttons">
          <button className="btn-dark">Find Your Job</button>
          <button className="btn-light">Learn More</button>
        </div>

        <div className="hero-users">
          <div className="avatars">
            <img src={av1} />
            <img src={av2} />
            <img src={av3} />
            <img src={av4} />
            <img src={av5} />
          </div>
          <strong>154K</strong>
          <span className="users-text">Users got their dream job</span>
        </div>
      </div>

      <div className="hero-right">
        <img src={hero} className="hero-img" />
      </div>
    </section>
  );
}
