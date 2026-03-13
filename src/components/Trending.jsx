import { trendingArticles } from "../data";

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function Trending() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-title">Trending</span>
          <div className="nav-arrows">
            <button className="nav-arrow">&#8249;</button>
            <button className="nav-arrow">&#8250;</button>
          </div>
        </div>

        <div className="trending-grid">
          {trendingArticles.map((article) => (
            <article className="trending-card" key={article.id}>
              <div className="trending-card-image">
                <img src={article.image} alt={article.imageAlt} />
              </div>
              <div className="trending-card-body">
                <div className="trending-card-title">{article.title}</div>
                <div className="trending-card-desc">{article.description}</div>
                <div className="timestamp">
                  <ClockIcon />
                  {article.time}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
