export function createContactPage() {
  return `
    <section id="contact" class="section" style="padding-top: 6rem;">
      <div class="container">
        <div class="section-header">
          <p class="section-subtitle">Get in Touch</p>
          <h2>Request Your Free Quote</h2>
          <p>We'll respond within 24 hours with a detailed, no-obligation quote. Let's bring your outdoor vision to life.</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr; gap: 3rem; max-width: 1000px; margin: 0 auto;">
          <div style="background-color: var(--color-off-white); padding: 2.5rem; border-radius: 8px;">
            <h3 style="margin-bottom: 1.5rem;">Send Us a Message</h3>
            <form id="contactForm">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                <div class="form-group">
                  <label for="name">Full Name *</label>
                  <input type="text" id="name" name="name" required placeholder="John Smith">
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required placeholder="07XXX XXXXXX">
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" name="email" required placeholder="john.smith@email.com">
              </div>

              <div class="form-group">
                <label for="address">Property Address / Postcode *</label>
                <input type="text" id="address" name="address" required placeholder="e.g., B37, Birmingham">
              </div>

              <div class="form-group">
                <label for="service">Service Required *</label>
                <select id="service" name="service" required>
                  <option value="">Please select a service...</option>
                  <option value="driveway">Paving & Driveways</option>
                  <option value="landscaping">Garden Landscaping</option>
                  <option value="patio">Patio & Paths</option>
                  <option value="maintenance">Garden Maintenance</option>
                  <option value="walls">Walls & Features</option>
                  <option value="artificial-grass">Artificial Grass</option>
                  <option value="other">Other / Multiple Services</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Tell Us About Your Project *</label>
                <textarea id="message" name="message" required placeholder="Please describe what you're looking for, any specific requirements, timeframes, or questions you have. The more detail you provide, the more accurate our quote will be."></textarea>
              </div>

              <div style="margin-bottom: 1.5rem;">
                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                  <input type="checkbox" id="consent" required>
                  <span style="font-size: 0.9rem;">I agree to be contacted regarding my enquiry *</span>
                </label>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%; font-size: 1.1rem;">Send Enquiry</button>

              <p style="font-size: 0.85rem; color: var(--color-charcoal); margin-top: 1rem; text-align: center;">
                <strong>We'll respond within 24 hours</strong> with a detailed quote. All enquiries are completely free with no obligation.
              </p>
            </form>

            <div id="formMessage" style="margin-top: 1.5rem; padding: 1rem; border-radius: 4px; display: none;"></div>
          </div>

          <div>
            <h3 style="margin-bottom: 1.5rem;">Contact Information</h3>
            <div class="contact-info-grid">
              <div class="contact-info-item">
                <div class="contact-icon">📞</div>
                <h4>Phone</h4>
                <p><strong>[Your Phone Number]</strong></p>
                <p style="font-size: 0.9rem;">Mon-Fri: 8am-6pm<br>Sat: 9am-4pm</p>
              </div>

              <div class="contact-info-item">
                <div class="contact-icon">✉️</div>
                <h4>Email</h4>
                <p><strong>[Your Email Address]</strong></p>
                <p style="font-size: 0.9rem;">We'll respond within 24 hours</p>
              </div>

              <div class="contact-info-item">
                <div class="contact-icon">📍</div>
                <h4>Service Area</h4>
                <p><strong>Marston Green, Birmingham</strong></p>
                <p style="font-size: 0.9rem;">& surrounding suburbs</p>
              </div>
            </div>

            <div style="background-color: var(--color-off-white); padding: 2rem; border-radius: 8px; margin-top: 2rem;">
              <h4 style="margin-bottom: 1rem;">Service Coverage Area</h4>
              <p style="margin-bottom: 1rem;">We proudly serve the following areas:</p>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; font-size: 0.95rem;">
                <div>✓ Marston Green</div>
                <div>✓ Solihull</div>
                <div>✓ Sheldon</div>
                <div>✓ Yardley</div>
                <div>✓ Erdington</div>
                <div>✓ Sutton Coldfield</div>
                <div>✓ Birmingham City Centre</div>
                <div>✓ Surrounding suburbs</div>
              </div>
              <p style="margin-top: 1rem; font-size: 0.9rem; font-style: italic;">Not sure if we cover your area? Get in touch and we'll let you know!</p>
            </div>

            <div style="margin-top: 2rem; padding: 2rem; background: linear-gradient(135deg, var(--color-slate), var(--color-green-accent)); border-radius: 8px; color: white; text-align: center;">
              <h4 style="color: white; margin-bottom: 1rem;">Why Request a Quote?</h4>
              <div style="text-align: left; max-width: 400px; margin: 0 auto;">
                <p style="margin-bottom: 0.5rem;">✓ <strong>100% Free</strong> - No obligation quote</p>
                <p style="margin-bottom: 0.5rem;">✓ <strong>Fast Response</strong> - Within 24 hours</p>
                <p style="margin-bottom: 0.5rem;">✓ <strong>Transparent Pricing</strong> - Detailed breakdown</p>
                <p style="margin-bottom: 0.5rem;">✓ <strong>Expert Advice</strong> - Professional guidance</p>
                <p>✓ <strong>No Hidden Costs</strong> - What you see is what you pay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initializeContactForm() {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
      };

      formMessage.style.display = 'block';
      formMessage.style.backgroundColor = 'var(--color-green-light)';
      formMessage.style.color = 'white';
      formMessage.innerHTML = '<strong>✓ Thank you for your enquiry!</strong><br>We\'ve received your message and will respond within 24 hours with a detailed quote.';

      form.reset();

      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 8000);
    });
  }
}
