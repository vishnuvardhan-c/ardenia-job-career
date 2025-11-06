export default function StatsRow() {
  return (
    <div className="container stats-row">
      <div className="stat-card">
        <span className="stat-icon">⬆️</span>
        <div><h3>154K</h3><p>Assistant Job</p></div>
      </div>

      <div className="stat-card">
        <span className="stat-icon">↗️</span>
        <div><h3>20K</h3><p>Pro Courses</p></div>
      </div>

      <div className="stat-card">
        <span className="stat-icon">📈</span>
        <div><h3>154K</h3><p>Alumni Jobs</p></div>
      </div>
    </div>
  );
}
