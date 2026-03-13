import { footerLinks } from "../data";

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

const socialIcons = {
  Instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
  Twitter: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  Facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  Skype: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.337-1.428l-3.468-.866c-2.795-.704-3.312-2.219-3.312-3.646 0-2.965 2.792-4.006 5.445-4.006 2.43 0 5.29 1.341 5.29 3.108 0 .786-.685 1.237-1.447 1.237-1.531 0-1.254-2.118-4.033-2.118-1.448 0-2.292.664-2.292 1.659 0 .995.919 1.324 2.087 1.604l2.548.617c2.838.65 3.541 2.27 3.541 3.777 0 2.595-1.999 4.156-5.572 4.156zM21.5 14.35a9.459 9.459 0 0 1-1.355 4.919A9.56 9.56 0 0 1 14.327 23a9.465 9.465 0 0 1-4.918-1.351 5.406 5.406 0 0 1-2.268.501 5.48 5.48 0 0 1-5.481-5.482 5.455 5.455 0 0 1 .502-2.281 9.466 9.466 0 0 1-1.349-4.904A9.56 9.56 0 0 1 4.65 3.675a9.453 9.453 0 0 1 4.906-1.352 9.46 9.46 0 0 1 4.918 1.351 5.402 5.402 0 0 1 2.267-.5 5.48 5.48 0 0 1 5.482 5.481 5.458 5.458 0 0 1-.499 2.27A9.459 9.459 0 0 1 21.5 14.35z"/>
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo">Logo</div>

          {Object.entries(footerLinks).map(([key, links]) => (
            <ul className="footer-links" key={key}>
              {links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          ))}

          <div className="footer-newsletter">
            <div className="newsletter-input-wrap">
              <input
                type="email"
                placeholder="Your email..."
                className="newsletter-input"
              />
              <button className="newsletter-btn" aria-label="Subscribe">
                <SendIcon />
              </button>
            </div>
          </div>

          <div className="footer-social">
            {Object.entries(socialIcons).map(([name, icon]) => (
              <a href="#" key={name} aria-label={name}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>2024 © News Portal. All rights reserved. Built with React.</p>
        </div>
      </div>
    </footer>
  );
}
