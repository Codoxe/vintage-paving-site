export function createAboutPage() {
  return `
    <section id="about" class="section" style="padding-top: 6rem;">
      <div class="container">
        <div class="section-header">
          <p class="section-subtitle">About Us</p>
          <h2>Vintage Paving & Landscaping Ltd</h2>
          <p>Your trusted local experts in Birmingham for quality paving and landscaping</p>
        </div>

        <div style="max-width: 900px; margin: 0 auto;">
          <div style="background-color: var(--color-off-white); padding: 3rem; border-radius: 8px; margin-bottom: 3rem;">
            <h3>Our Story</h3>
            <p>Based in Marston Green, Birmingham, Vintage Paving & Landscaping Ltd has been transforming outdoor spaces across the West Midlands with dedication, skill, and an unwavering commitment to quality. We're a local, family-run business that takes genuine pride in every project we undertake.</p>

            <p>Our name reflects our values: "Vintage" represents timeless craftsmanship and traditional quality that stands the test of time. We believe in doing things properly, using proven techniques alongside modern materials and methods to deliver results that last.</p>

            <p>Whether it's a new driveway that enhances your property's kerb appeal, a beautiful patio for summer entertaining, or a complete garden transformation, we approach every project with the same care and attention to detail. We're not just contractors – we're craftsmen who genuinely care about creating outdoor spaces you'll love for years to come.</p>
          </div>

          <div style="margin: 3rem 0;">
            <h3>Where We Work</h3>
            <p>We're proud to serve Marston Green, Birmingham, and the surrounding areas including:</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
              <div style="background: var(--color-green-accent); color: white; padding: 1rem; border-radius: 4px; text-align: center;">Marston Green</div>
              <div style="background: var(--color-green-accent); color: white; padding: 1rem; border-radius: 4px; text-align: center;">Solihull</div>
              <div style="background: var(--color-green-accent); color: white; padding: 1rem; border-radius: 4px; text-align: center;">Sheldon</div>
              <div style="background: var(--color-green-accent); color: white; padding: 1rem; border-radius: 4px; text-align: center;">Yardley</div>
              <div style="background: var(--color-green-accent); color: white; padding: 1rem; border-radius: 4px; text-align: center;">Erdington</div>
              <div style="background: var(--color-green-accent); color: white; padding: 1rem; border-radius: 4px; text-align: center;">Sutton Coldfield</div>
            </div>
            <p style="text-align: center; margin-top: 1rem;"><em>Serving all Birmingham suburbs and surrounding areas</em></p>
          </div>

          <div style="margin: 3rem 0;">
            <h3>Our Mission & Values</h3>
            <div class="features-grid" style="margin-top: 2rem;">
              <div class="feature-item" style="background-color: var(--color-off-white); border-radius: 8px;">
                <div class="feature-icon" style="background-color: var(--color-earth);">🛠️</div>
                <h4>Quality Craftsmanship</h4>
                <p>Every project is completed to the highest standards using quality materials and time-tested techniques.</p>
              </div>
              <div class="feature-item" style="background-color: var(--color-off-white); border-radius: 8px;">
                <div class="feature-icon" style="background-color: var(--color-earth);">🤝</div>
                <h4>Customer Care</h4>
                <p>We treat your property with respect, communicate clearly, and don't consider a job done until you're completely satisfied.</p>
              </div>
              <div class="feature-item" style="background-color: var(--color-off-white); border-radius: 8px;">
                <div class="feature-icon" style="background-color: var(--color-earth);">💚</div>
                <h4>Local & Reliable</h4>
                <p>As a local business, our reputation matters. We're here for the long term, building lasting relationships with our customers.</p>
              </div>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, var(--color-slate), var(--color-green-accent)); color: white; padding: 3rem; border-radius: 8px; margin: 3rem 0; text-align: center;">
            <h3 style="color: white;">What We Promise</h3>
            <div style="max-width: 700px; margin: 2rem auto;">
              <div style="margin: 1.5rem 0; text-align: left;">
                <strong style="font-size: 1.1rem;">✓ Quality Materials</strong>
                <p style="margin-top: 0.5rem;">We source premium materials from trusted suppliers. No shortcuts, no compromises.</p>
              </div>
              <div style="margin: 1.5rem 0; text-align: left;">
                <strong style="font-size: 1.1rem;">✓ Professional Finish</strong>
                <p style="margin-top: 0.5rem;">Skilled workmanship with attention to every detail, from preparation through to completion.</p>
              </div>
              <div style="margin: 1.5rem 0; text-align: left;">
                <strong style="font-size: 1.1rem;">✓ Clear Communication</strong>
                <p style="margin-top: 0.5rem;">You'll always know what's happening, when we'll be there, and what to expect.</p>
              </div>
              <div style="margin: 1.5rem 0; text-align: left;">
                <strong style="font-size: 1.1rem;">✓ Respect for Your Property</strong>
                <p style="margin-top: 0.5rem;">We keep work areas tidy, protect your property, and leave everything clean when we're done.</p>
              </div>
              <div style="margin: 1.5rem 0; text-align: left;">
                <strong style="font-size: 1.1rem;">✓ Fair, Transparent Pricing</strong>
                <p style="margin-top: 0.5rem;">Detailed quotes with no hidden costs. You'll know exactly what you're paying for.</p>
              </div>
            </div>
          </div>

          <div style="text-align: center; margin: 3rem 0;">
            <h3>Why Choose Vintage Paving & Landscaping?</h3>
            <p style="font-size: 1.1rem; max-width: 700px; margin: 1.5rem auto;">We're not the biggest landscaping company in Birmingham, and that's by design. We prefer to focus on quality over quantity, giving each project the time and attention it deserves. When you choose us, you're choosing a team that genuinely cares about creating something you'll be proud of.</p>
            <p style="font-size: 1.1rem; max-width: 700px; margin: 1.5rem auto;"><strong>We're licensed, insured, and stand behind all our work.</strong> Most importantly, we're your neighbours – local people who take pride in enhancing our community, one garden at a time.</p>
          </div>

          <div class="cta-section" style="border-radius: 8px;">
            <h2>Ready to Start Your Project?</h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem;">Let's discuss your vision and create something beautiful together</p>
            <a href="#contact" class="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
