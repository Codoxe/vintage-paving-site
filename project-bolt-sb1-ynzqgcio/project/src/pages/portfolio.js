export function createPortfolioPage() {
  return `
    <section id="portfolio" class="section" style="padding-top: 6rem;">
      <div class="container">
        <div class="section-header">
          <p class="section-subtitle">Our Work</p>
          <h2>Recent Projects</h2>
          <p>Explore our portfolio of completed paving and landscaping projects across Birmingham and surrounding areas</p>
        </div>

        <div class="gallery-grid">
          <div class="gallery-item" onclick="openModal(0)">
            <img src="./assets/driveway.jpg" alt="Modern block paving driveway">
            <div class="gallery-overlay">
              <h4>Modern Block Paving Driveway</h4>
              <p>Solihull, Birmingham</p>
            </div>
          </div>

          <div class="gallery-item" onclick="openModal(1)">
            <img src="/assets/pav1.jpg" alt="Complete garden transformation">
            <div class="gallery-overlay">
              <h4>Complete Garden Transformation</h4>
              <p>Marston Green</p>
            </div>
          </div>

          <div class="gallery-item" onclick="openModal(2)">
            <img src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Natural stone patio">
            <div class="gallery-overlay">
              <h4>Natural Stone Patio</h4>
              <p>Sheldon, Birmingham</p>
            </div>
          </div>

          <div class="gallery-item" onclick="openModal(3)">
            <img src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Garden landscaping with lawn">
            <div class="gallery-overlay">
              <h4>Garden Landscaping with Lawn</h4>
              <p>Yardley, Birmingham</p>
            </div>
          </div>

          <div class="gallery-item" onclick="openModal(4)">
            <img src="https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Resin-bound driveway">
            <div class="gallery-overlay">
              <h4>Resin-Bound Driveway</h4>
              <p>Erdington, Birmingham</p>
            </div>
          </div>

          <div class="gallery-item" onclick="openModal(5)">
            <img src="https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Entertaining patio area">
            <div class="gallery-overlay">
              <h4>Entertaining Patio Area</h4>
              <p>Solihull</p>
            </div>
          </div>

          <div class="gallery-item" onclick="openModal(6)">
            <img src="https://images.pexels.com/photos/2227774/pexels-photo-2227774.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Retaining wall project">
            <div class="gallery-overlay">
              <h4>Retaining Wall & Raised Beds</h4>
              <p>Sutton Coldfield</p>
            </div>
          </div>

          <div class="gallery-item" onclick="openModal(7)">
            <img src="https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Front garden redesign">
            <div class="gallery-overlay">
              <h4>Front Garden Redesign</h4>
              <p>Marston Green</p>
            </div>
          </div>

          <div class="gallery-item" onclick="openModal(8)">
            <img src="https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Garden maintenance">
            <div class="gallery-overlay">
              <h4>Garden Maintenance Project</h4>
              <p>Birmingham</p>
            </div>
          </div>

          <div class="gallery-item" onclick="openModal(9)">
            <img src="https://images.pexels.com/photos/1183828/pexels-photo-1183828.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Artificial grass installation">
            <div class="gallery-overlay">
              <h4>Artificial Grass Installation</h4>
              <p>Sheldon, Birmingham</p>
            </div>
          </div>

          <div class="gallery-item" onclick="openModal(10)">
            <img src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Garden path">
            <div class="gallery-overlay">
              <h4>Natural Stone Garden Path</h4>
              <p>Solihull</p>
            </div>
          </div>

          <div class="gallery-item" onclick="openModal(11)">
            <img src="https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Patio with garden design">
            <div class="gallery-overlay">
              <h4>Patio with Integrated Garden Design</h4>
              <p>Yardley</p>
            </div>
          </div>
        </div>

        <div class="section-header" style="margin-top: 4rem;">
          <h3>Every Project Tells a Story</h3>
          <p>Each garden and driveway we create is unique, tailored to the homeowner's lifestyle, property, and vision. From initial consultation through to completion, we work closely with you to ensure the final result exceeds expectations.</p>
          <p><strong>Ready to start your project?</strong> Contact us today for a free consultation and quote.</p>
          <div style="margin-top: 2rem;">
            <a href="#contact" class="btn btn-primary">Get Your Free Quote</a>
          </div>
        </div>
      </div>
    </section>

    <div id="portfolioModal" class="modal">
      <div class="modal-content">
        <span class="modal-close" onclick="closeModal()">&times;</span>
        <img id="modalImage" src="" alt="Project image">
        <div class="modal-info">
          <h3 id="modalTitle"></h3>
          <p id="modalLocation"></p>
          <p id="modalDescription"></p>
        </div>
      </div>
    </div>
  `;
}

export function initializePortfolio() {
  const projects = [
    {
      title: "Modern Block Paving Driveway",
      location: "Solihull, Birmingham",
      image: "https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "A stunning charcoal and buff block paving driveway with decorative border. Complete excavation, proper sub-base preparation, and expert laying for a durable finish that will last for decades."
    },
    {
      title: "Complete Garden Transformation",
      location: "Marston Green",
      image: "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Full garden redesign including lawn installation, planting scheme, raised beds, and feature lighting. A complete transformation from overgrown space to beautiful outdoor sanctuary."
    },
    {
      title: "Natural Stone Patio",
      location: "Sheldon, Birmingham",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Elegant Indian sandstone patio in autumn brown mix. Perfect for outdoor dining and entertaining, with proper drainage and jointing for weather resistance."
    },
    {
      title: "Garden Landscaping with Lawn",
      location: "Yardley, Birmingham",
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Contemporary garden design featuring premium turf lawn, decorative borders, and low-maintenance planting. Perfect balance of aesthetic appeal and practicality."
    },
    {
      title: "Resin-Bound Driveway",
      location: "Erdington, Birmingham",
      image: "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Modern resin-bound driveway in golden aggregate. Permeable surface that's SUDS compliant, durable, and low maintenance with a smooth, elegant finish."
    },
    {
      title: "Entertaining Patio Area",
      location: "Solihull",
      image: "https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Spacious porcelain patio perfect for outdoor entertaining. Large format tiles in contemporary grey, with integrated outdoor lighting and landscaping."
    },
    {
      title: "Retaining Wall & Raised Beds",
      location: "Sutton Coldfield",
      image: "https://images.pexels.com/photos/2227774/pexels-photo-2227774.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Structural retaining wall and raised planting beds using natural stone. Adds dimension to the garden while solving drainage and level challenges."
    },
    {
      title: "Front Garden Redesign",
      location: "Marston Green",
      image: "https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Complete front garden transformation with new driveway, ornamental planting, and low-maintenance design. Enhanced kerb appeal and property value."
    },
    {
      title: "Garden Maintenance Project",
      location: "Birmingham",
      image: "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Regular maintenance service including hedge trimming, lawn care, weeding, and seasonal planting. Keeping this beautiful garden in pristine condition year-round."
    },
    {
      title: "Artificial Grass Installation",
      location: "Sheldon, Birmingham",
      image: "https://images.pexels.com/photos/1183828/pexels-photo-1183828.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Premium artificial grass installation for a low-maintenance, year-round green lawn. Perfect for busy families and pet owners."
    },
    {
      title: "Natural Stone Garden Path",
      location: "Solihull",
      image: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Elegant curved pathway using natural stone stepping stones. Connects different areas of the garden while adding visual interest."
    },
    {
      title: "Patio with Integrated Garden Design",
      location: "Yardley",
      image: "https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Comprehensive project combining patio installation with complete garden landscaping, featuring coordinated materials and planting for a cohesive outdoor space."
    }
  ];

  window.openModal = function(index) {
    const modal = document.getElementById('portfolioModal');
    const project = projects[index];

    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalLocation').textContent = project.location;
    document.getElementById('modalDescription').textContent = project.description;

    modal.style.display = 'block';
  };

  window.closeModal = function() {
    document.getElementById('portfolioModal').style.display = 'none';
  };

  window.onclick = function(event) {
    const modal = document.getElementById('portfolioModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}
