import { featureArticles, smallArticles } from "../data";

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function HappeningNow() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-title">Happening Now</span>
          <div className="nav-arrows">
            <button className="nav-arrow">&#8249;</button>
            <button className="nav-arrow">&#8250;</button>
          </div>
        </div>

        <div className="happening-grid">
          {/* Feature cards column */}
          <div>
            {featureArticles.map((article) => (
              <article className="feature-card" key={article.id}>
                <div className="feature-card-image">
                  <img src={article.image} alt={article.imageAlt} />
                  <div className="feature-card-overlay" />
                </div>
                <div className="feature-card-content">
                  <div className="tag">{article.tag}</div>
                  <h2 className="feature-card-title">{article.title}</h2>
                  <p className="feature-card-desc">{article.description}</p>
                  <div className="timestamp">
                    <ClockIcon />
                    {article.time}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Small articles sidebar */}
          <div className="small-articles">
            {smallArticles.map((article) => (
              <article className="small-article" key={article.id}>
                <div className="small-article-image">
                  <img src={article.image} alt={article.imageAlt} />
                </div>
                <div className="small-article-body">
                  <div className="small-article-title">{article.title}</div>
                  <div className="timestamp">
                    <ClockIcon />
                    {article.time} by{" "}
                    <a href="#" style={{ color: article.authorColor, fontWeight: 600 }}>
                      {article.author}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
