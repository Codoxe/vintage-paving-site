export function createHomePage() {
  return `
    <section id="home" class="hero">
      <img
        src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Beautiful landscaped garden"
        class="hero-background"
      />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Crafting Beautiful Gardens & Durable Paving for Your Home</h1>
        <p class="hero-subtitle">Local craftsmanship — trusted, reliable, and built to last. Serving Birmingham and surrounding suburbs.</p>
        <div class="hero-buttons">
          <a href="#portfolio" class="btn btn-primary">See Our Work</a>
          <a href="#contact" class="btn btn-secondary">Request a Quote</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <p class="section-subtitle">Welcome</p>
          <h2>Your Trusted Birmingham Landscaping & Paving Specialists</h2>
          <p>Based in Marston Green, Birmingham, Vintage Paving & Landscaping Ltd brings together traditional craftsmanship and modern design to create stunning outdoor spaces. From elegant driveways to peaceful garden retreats, we transform your vision into reality with quality materials, skilled workmanship, and genuine care for every detail.</p>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <p class="section-subtitle">What We Do</p>
          <h2>Our Services</h2>
          <p>Comprehensive paving and landscaping solutions tailored to your property</p>
        </div>
        <div class="cards-grid">
          <div class="card">
            <img src="https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Modern paved driveway" class="card-image">
            <div class="card-content">
              <h3>Paving & Driveways</h3>
              <p>Transform your property entrance with expertly laid driveways using premium block paving, natural stone, or resin-bound surfaces. Durable, attractive, and built to last decades.</p>
              <a href="#services" class="btn btn-outline">Learn More</a>
            </div>
          </div>
          <div class="card">
            <img src="https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Garden landscape design" class="card-image">
            <div class="card-content">
              <h3>Garden Landscaping</h3>
              <p>Create your dream outdoor space with bespoke garden design. From concept to completion, we craft gardens that blend beauty, functionality, and low maintenance living.</p>
              <a href="#services" class="btn btn-outline">Learn More</a>
            </div>
          </div>
          <div class="card">
            <img src="https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Patio area with seating" class="card-image">
            <div class="card-content">
              <h3>Patio & Paths</h3>
              <p>Elegant patios and pathways that connect your garden beautifully. Using natural stone, porcelain, or traditional paving to create inviting outdoor entertaining areas.</p>
              <a href="#services" class="btn btn-outline">Learn More</a>
            </div>
          </div>
          <div class="card">
            <img src="https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Garden maintenance" class="card-image">
            <div class="card-content">
              <h3>Garden Maintenance</h3>
              <p>Keep your outdoor space looking pristine year-round with our professional maintenance services. Regular care that preserves your investment and enhances its beauty.</p>
              <a href="#services" class="btn btn-outline">Learn More</a>
            </div>
          </div>
          <div class="card">
            <img src="https://images.pexels.com/photos/2227774/pexels-photo-2227774.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Garden walls and features" class="card-image">
            <div class="card-content">
              <h3>Walls & Features</h3>
              <p>Add character and structure with retaining walls, raised beds, and decorative garden features. Expertly crafted in stone, brick, or modern materials.</p>
              <a href="#services" class="btn btn-outline">Learn More</a>
            </div>
          </div>
          <div class="card">
            <img src="https://images.pexels.com/photos/1183828/pexels-photo-1183828.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Artificial grass installation" class="card-image">
            <div class="card-content">
              <h3>Artificial Grass</h3>
              <p>Low-maintenance, year-round green lawns with premium artificial grass installation. Perfect for busy families and pet owners wanting a perfect lawn without the upkeep.</p>
              <a href="#services" class="btn btn-outline">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <p class="section-subtitle">Our Work</p>
          <h2>Featured Projects</h2>
          <p>A selection of recent landscaping and paving projects across Birmingham</p>
        </div>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Completed driveway project">
            <div class="gallery-overlay">
              <h4>Modern Block Paving Driveway</h4>
              <p>Solihull, Birmingham</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Garden landscaping project">
            <div class="gallery-overlay">
              <h4>Complete Garden Transformation</h4>
              <p>Marston Green</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Patio installation">
            <div class="gallery-overlay">
              <h4>Natural Stone Patio</h4>
              <p>Sheldon, Birmingham</p>
            </div>
          </div>
        </div>
        <div style="text-align: center; margin-top: 3rem;">
          <a href="#portfolio" class="btn btn-primary">View Full Portfolio</a>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <p class="section-subtitle">Why Choose Us</p>
          <h2>Your Local Birmingham Experts</h2>
        </div>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <h4>Licensed & Insured</h4>
            <p>Fully qualified professionals with comprehensive insurance coverage for your peace of mind.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">£</div>
            <h4>Free Quotes</h4>
            <p>No-obligation, detailed quotes with transparent pricing. No hidden costs or surprises.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">⭐</div>
            <h4>Quality Materials</h4>
            <p>We use only premium-grade materials from trusted suppliers to ensure lasting results.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">📍</div>
            <h4>Local to Birmingham</h4>
            <p>Based in Marston Green, we're your local experts serving Birmingham and the surrounding areas.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">💬</div>
            <h4>Customer-Focused</h4>
            <p>Clear communication, respect for your property, and commitment to your complete satisfaction.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🛡️</div>
            <h4>Workmanship Guarantee</h4>
            <p>All work comes with our quality guarantee. We stand behind everything we do.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <p class="section-subtitle">Testimonials</p>
          <h2>What Our Customers Say</h2>
        </div>
        <div class="cards-grid" style="max-width: 1000px; margin: 0 auto;">
          <div class="testimonial-card">
            <p class="testimonial-text">"Absolutely thrilled with our new driveway. The team was professional, tidy, and the quality of work is outstanding. Would highly recommend to anyone in Birmingham."</p>
            <p class="testimonial-author">— Sarah M., Solihull</p>
          </div>
          <div class="testimonial-card">
            <p class="testimonial-text">"Vintage Paving transformed our tired garden into a beautiful space we actually want to spend time in. Great attention to detail and finished exactly when promised."</p>
            <p class="testimonial-author">— James T., Marston Green</p>
          </div>
          <div class="testimonial-card">
            <p class="testimonial-text">"From quote to completion, the whole experience was seamless. Our patio looks stunning and has become the focal point of our garden. Excellent value for money."</p>
            <p class="testimonial-author">— Linda & David K., Sheldon</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Ready to Transform Your Outdoor Space?</h2>
        <p style="font-size: 1.2rem; margin-bottom: 2rem;">Get in touch today for a free, no-obligation quote</p>
        <a href="#contact" class="btn btn-secondary">Request Your Free Quote</a>
      </div>
    </section>
  `;
}
