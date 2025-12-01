export function createServicesPage() {
  return `
    <section id="services" class="section" style="padding-top: 6rem;">
      <div class="container">
        <div class="section-header">
          <p class="section-subtitle">Our Services</p>
          <h2>Professional Paving & Landscaping Services</h2>
          <p>Comprehensive outdoor solutions tailored to Birmingham properties. From initial design to final installation, we deliver excellence at every stage.</p>
        </div>

        <div class="cards-grid" style="margin-top: 3rem;">
          <div class="card">
            <img src="https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Driveway paving" class="card-image">
            <div class="card-content">
              <h3>Paving & Driveways</h3>
              <p><strong>Professional driveway installation and renovation</strong></p>
              <ul style="list-style: none; padding: 0; margin: 1rem 0;">
                <li>✓ Block paving in various patterns and colours</li>
                <li>✓ Natural stone driveways</li>
                <li>✓ Resin-bound surfaces</li>
                <li>✓ Tarmac and asphalt</li>
                <li>✓ Driveway repairs and restoration</li>
                <li>✓ Proper drainage and foundation work</li>
              </ul>
              <p>Enhance your property's kerb appeal with a beautifully crafted driveway built to withstand daily use and British weather.</p>
              <a href="#contact" class="btn btn-primary">Enquire Now</a>
            </div>
          </div>

          <div class="card">
            <img src="https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Garden landscaping" class="card-image">
            <div class="card-content">
              <h3>Garden Design & Landscaping</h3>
              <p><strong>Complete garden transformations from concept to reality</strong></p>
              <ul style="list-style: none; padding: 0; margin: 1rem 0;">
                <li>✓ Bespoke garden design service</li>
                <li>✓ Lawn installation (turf & seeding)</li>
                <li>✓ Planting schemes</li>
                <li>✓ Raised beds and borders</li>
                <li>✓ Garden clearance and preparation</li>
                <li>✓ Fencing and screening</li>
              </ul>
              <p>Create your perfect outdoor retreat with our comprehensive landscaping services, blending aesthetics with functionality.</p>
              <a href="#contact" class="btn btn-primary">Enquire Now</a>
            </div>
          </div>

          <div class="card">
            <img src="https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Patio construction" class="card-image">
            <div class="card-content">
              <h3>Patio & Paths</h3>
              <p><strong>Beautiful outdoor living spaces and connecting pathways</strong></p>
              <ul style="list-style: none; padding: 0; margin: 1rem 0;">
                <li>✓ Natural stone patios</li>
                <li>✓ Porcelain paving</li>
                <li>✓ Brick and block paving patios</li>
                <li>✓ Garden pathways and stepping stones</li>
                <li>✓ Patio extensions</li>
                <li>✓ Outdoor entertaining areas</li>
              </ul>
              <p>Expertly constructed patios that become the heart of your garden, perfect for relaxing and entertaining.</p>
              <a href="#contact" class="btn btn-primary">Enquire Now</a>
            </div>
          </div>

          <div class="card">
            <img src="https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Garden maintenance" class="card-image">
            <div class="card-content">
              <h3>Garden Maintenance</h3>
              <p><strong>Regular care to keep your garden looking its best</strong></p>
              <ul style="list-style: none; padding: 0; margin: 1rem 0;">
                <li>✓ Lawn mowing and edging</li>
                <li>✓ Hedge trimming and pruning</li>
                <li>✓ Weeding and mulching</li>
                <li>✓ Seasonal clean-ups</li>
                <li>✓ Pressure washing (patios, driveways)</li>
                <li>✓ One-off or regular service plans</li>
              </ul>
              <p>Maintain the beauty of your outdoor space year-round with our professional maintenance services.</p>
              <a href="#contact" class="btn btn-primary">Enquire Now</a>
            </div>
          </div>

          <div class="card">
            <img src="https://images.pexels.com/photos/2227774/pexels-photo-2227774.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Garden walls" class="card-image">
            <div class="card-content">
              <h3>Walls & Features</h3>
              <p><strong>Structural and decorative garden features</strong></p>
              <ul style="list-style: none; padding: 0; margin: 1rem 0;">
                <li>✓ Retaining walls</li>
                <li>✓ Garden walls and boundaries</li>
                <li>✓ Raised planting beds</li>
                <li>✓ Steps and terracing</li>
                <li>✓ Decorative stonework</li>
                <li>✓ Water features</li>
              </ul>
              <p>Add structure, character, and functionality to your garden with expertly built walls and features.</p>
              <a href="#contact" class="btn btn-primary">Enquire Now</a>
            </div>
          </div>

          <div class="card">
            <img src="https://images.pexels.com/photos/1183828/pexels-photo-1183828.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Artificial grass" class="card-image">
            <div class="card-content">
              <h3>Artificial Grass</h3>
              <p><strong>Low-maintenance, year-round perfect lawns</strong></p>
              <ul style="list-style: none; padding: 0; margin: 1rem 0;">
                <li>✓ Premium artificial grass installation</li>
                <li>✓ Pet-friendly options</li>
                <li>✓ Child-safe surfaces</li>
                <li>✓ Various pile heights and textures</li>
                <li>✓ Proper drainage systems</li>
                <li>✓ 10+ year lifespan</li>
              </ul>
              <p>Enjoy a pristine green lawn all year without mowing, watering, or muddy patches. Perfect for busy families.</p>
              <a href="#contact" class="btn btn-primary">Enquire Now</a>
            </div>
          </div>
        </div>

        <div class="section-header" style="margin-top: 4rem;">
          <h2>Our Process</h2>
          <p>From initial consultation to project completion, we make it easy</p>
        </div>

        <div class="features-grid" style="max-width: 1000px; margin: 0 auto;">
          <div class="feature-item">
            <div class="feature-icon" style="background-color: var(--color-earth);">1</div>
            <h4>Free Consultation</h4>
            <p>We visit your property to discuss your vision, assess the site, and understand your requirements.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon" style="background-color: var(--color-earth);">2</div>
            <h4>Detailed Quote</h4>
            <p>Receive a transparent, itemised quote with no hidden costs. We explain every aspect of the work.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon" style="background-color: var(--color-earth);">3</div>
            <h4>Professional Installation</h4>
            <p>Our skilled team completes the work to the highest standards, on time and with minimal disruption.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon" style="background-color: var(--color-earth);">4</div>
            <h4>Final Walkthrough</h4>
            <p>We ensure you're completely satisfied with the finished result before we consider the job complete.</p>
          </div>
        </div>

        <div class="cta-section" style="margin-top: 4rem; border-radius: 8px;">
          <h2>Ready to Get Started?</h2>
          <p style="font-size: 1.1rem; margin-bottom: 2rem;">Contact us today for your free, no-obligation quote</p>
          <a href="#contact" class="btn btn-secondary">Request a Quote</a>
        </div>
      </div>
    </section>
  `;
}
