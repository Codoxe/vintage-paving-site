import './styles/main.css';
import './styles/modal.css';
import { createHeader, initializeHeader } from './components/header.js';
import { createFooter } from './components/footer.js';
import { createHomePage } from './pages/home.js';
import { createServicesPage } from './pages/services.js';
import { createPortfolioPage, initializePortfolio } from './pages/portfolio.js';
import { createAboutPage } from './pages/about.js';
import { createContactPage, initializeContactForm } from './pages/contact.js';

function initializeApp() {
  const app = document.querySelector('#app');

  if (!app) {
    console.error('App element not found');
    return;
  }

  app.innerHTML = `
    ${createHeader()}
    <main>
      ${createHomePage()}
      ${createServicesPage()}
      ${createPortfolioPage()}
      ${createAboutPage()}
      ${createContactPage()}
    </main>
    ${createFooter()}
  `;

  initializeHeader();
  initializePortfolio();
  initializeContactForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
