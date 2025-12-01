export function createFooter() {
  return `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>Vintage Paving & Landscaping Ltd</h4>
            <p>Local craftsmanship you can trust. Serving Birmingham and surrounding suburbs with quality paving and landscaping services.</p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">f</a>
              <a href="#" class="social-link" aria-label="Instagram">📷</a>
              <a href="#" class="social-link" aria-label="Twitter">🐦</a>
            </div>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Paving & Driveways</a></li>
              <li><a href="#services">Garden Landscaping</a></li>
              <li><a href="#services">Patio & Paths</a></li>
              <li><a href="#services">Garden Maintenance</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Contact</h4>
            <p><strong>Phone:</strong> [Your Phone Number]</p>
            <p><strong>Email:</strong> [Your Email]</p>
            <p><strong>Service Area:</strong> Marston Green, Birmingham & Surrounds</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Vintage Paving & Landscaping Ltd. All rights reserved. Licensed & Insured.</p>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">Professional paving and landscaping services in Birmingham. Quality workmanship guaranteed.</p>
        </div>
      </div>
    </footer>
  `;
}
