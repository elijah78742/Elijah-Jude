/* ==========================================================================
   New Life Comprehensive College (NLCC) - Pure Vanilla JavaScript
   Standard DOM interactivity without external libraries or frameworks.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  console.log('NLCC Vanilla JS Engine Initialized.');

  // 1. FAQ Accordion Logic
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach((btn) => {
    btn.addEventListener('click', () => {
      const parentItem = btn.parentElement;
      // Toggle current
      parentItem.classList.toggle('active');
    });
  });

  // 2. Staff & Gallery Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filterCards = document.querySelectorAll('.filterable-item');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Remove active from all buttons
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      filterCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Modal Opening & Closing
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  const closeBtns = document.querySelectorAll('.modal-close');
  const modals = document.querySelectorAll('.modal-overlay');

  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetModalId = btn.getAttribute('data-open-modal');
      const modal = document.getElementById(targetModalId);
      if (modal) {
        modal.style.display = 'flex';
      }
    });
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

  // 4. Form Submission Simulation
  const contactForm = document.getElementById('vanilla-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedbackDiv = document.getElementById('form-feedback');
      if (feedbackDiv) {
        const refId = 'REF-' + Math.floor(100000 + Math.random() * 900000);
        feedbackDiv.style.display = 'block';
        feedbackDiv.innerHTML = `<strong>Success!</strong> Your inquiry has been submitted. Reference Code: <code>${refId}</code>.`;
        contactForm.reset();
      }
    });
  }
});
