// =========================
// NAVIGATION MENU TOGGLE
// =========================
function toggleMenu() {
  const nav = document.querySelector('.nav-left');
  nav.classList.toggle('show');
}

function closeMenu() {
  const nav = document.querySelector('.nav-left');
  nav.classList.remove('show');
}

// =========================
// IMAGE RELOAD ON PAGE LOAD
// =========================
window.addEventListener('load', () => {
  document.querySelectorAll('.img-container img').forEach(img => {
    img.style.display = 'none';
    void img.offsetHeight; // Force reflow
    img.style.display = 'block';
  });
});

// =========================
// AUTO SELECT FILTER BASED ON URL PARAMS
// =========================
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);

  const category = params.get('category');
  const brand = params.get('brand');

  if (category) {
    const categorySelect = document.getElementById('category');
    if (categorySelect) {
      for (let i = 0; i < categorySelect.options.length; i++) {
        if (categorySelect.options[i].text.toLowerCase() === category.toLowerCase()) {
          categorySelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  if (brand) {
    const brandSelect = document.getElementById('vehicle-model');
    if (brandSelect) {
      for (let i = 0; i < brandSelect.options.length; i++) {
        if (brandSelect.options[i].text.toLowerCase() === brand.toLowerCase()) {
          brandSelect.selectedIndex = i;
          break;
        }
      }
    }
  }
});

// =========================
// FETCH MODALS
// =========================
window.addEventListener('DOMContentLoaded', () => {
  fetch('/styles/modals.html')
    .then(response => response.text())
    .then(data => {
      const modalContainer = document.getElementById('modal-container');
      if (modalContainer) {
        modalContainer.innerHTML = data;
      }
    });
});

// =========================
// MODAL FUNCTIONS
// =========================
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
  const mailModal = document.getElementById('mailModal');
  const signupModal = document.getElementById('signupModal');

  if (mailModal && mailModal.style.display === 'flex' && event.target === mailModal) {
    closeModal('mailModal');
  }
  
  if (signupModal && signupModal.style.display === 'flex' && event.target === signupModal) {
    closeModal('signupModal');
  }
});

// Close modal on ESC key
window.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    closeModal('mailModal');
    closeModal('signupModal');
  }
});

// =========================
// CLEAR FILTERS
// =========================
function clearFilters() {
  const vehicleModel = document.getElementById('vehicle-model');
  const categorySelect = document.getElementById('category');
  if (vehicleModel) vehicleModel.selectedIndex = 0;
  if (categorySelect) categorySelect.selectedIndex = 0;

  const checkboxes = document.querySelectorAll('.rating-option input[type="checkbox"]');
  checkboxes.forEach(checkbox => checkbox.checked = false);

  const priceInputs = document.querySelectorAll('.price-range input[type="text"]');
  priceInputs.forEach(input => input.value = '');

  const keyword = document.getElementById('keyword');
  if (keyword) keyword.value = '';
}

// =========================
// APPLY FILTERS (Placeholder)
// =========================
function applyFilters() {
  alert('Applying Filters (feature coming soon!)');
}

// =========================
// FETCH HEADER AND FOOTER
// =========================
window.addEventListener('DOMContentLoaded', () => {
  fetch('/styles/header.html')
    .then(res => res.text())
    .then(data => {
      const headerPlaceholder = document.getElementById('header-placeholder');
      if (headerPlaceholder) headerPlaceholder.innerHTML = data;
    });

  fetch('/styles/footer.html')
    .then(res => res.text())
    .then(data => {
      const footerPlaceholder = document.getElementById('footer-placeholder');
      if (footerPlaceholder) footerPlaceholder.innerHTML = data;
    });
});
