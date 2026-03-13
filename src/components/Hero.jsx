import { heroData, sidebarNews } from "../data";

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function NavArrows() {
  return (
    <div className="nav-arrows">
      <button className="nav-arrow">&#8249;</button>
      <button className="nav-arrow">&#8250;</button>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      {/* Main hero image */}
      <div className="hero-main">
        <div className="hero-image-wrap">
          <img src={heroData.image} alt={heroData.imageAlt} />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-label">{heroData.label}</span>
          <div className="hero-divider" />
          <h1 className="hero-title">{heroData.title}</h1>
          <p className="hero-desc">{heroData.description}</p>
          <a href="#" className="btn-primary">Learn More</a>
        </div>
      </div>

      {/* Sidebar news */}
      <aside className="hero-sidebar">
        <div className="section-header">
          <span className="section-title">More News</span>
          <NavArrows />
        </div>

        {sidebarNews.map((item) => (
          <article className="news-item" key={item.id}>
            <div className="tag">{item.tag}</div>
            <div className="news-item-title">{item.title}</div>
            <div className="news-item-desc">{item.description}</div>
            <div className="timestamp">
              <ClockIcon />
              {item.time}
            </div>
          </article>
        ))}
      </aside>
    </section>
  );
}
