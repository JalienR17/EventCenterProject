const openOverlay = document.getElementById('openOverlay');
const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlayContent');
const closeOverlay = document.getElementById('closeOverlay');
const iframe = document.getElementById('iframe');
const rows = document.querySelectorAll(".rankings-table tbody tr");


overlay.style.display = 'none';
overlay.style.position = 'absolute';
overlay.style.top = '0';
overlay.style.right = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.zIndex = '10';


overlayContent.style.position = 'absolute';
overlayContent.style.top = '8rem';
overlayContent.style.right = '0.5rem';
overlayContent.style.width = 'auto';
overlayContent.style.height = 'auto';


iframe.style.position = 'absolute';
iframe.style.top = '0';
iframe.style.right = '0';
iframe.style.width = '12.5rem';
iframe.style.height = '18rem';
iframe.style.overflow = 'hidden';


// Function to show overlay
openOverlay.addEventListener('click', (event) => {
  event.preventDefault();
  overlay.style.display = 'block';
});

closeOverlay.addEventListener('click', () => {
  overlay.style.display = 'none'; // Hide overlay
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".rankings-table tbody tr");

  // Add click event listener to each row
  rows.forEach(row => {
    row.addEventListener("click", () => {
      const href = row.getAttribute("data-href");
      if (href) {
        window.location.href = href;
      } else {
        console.error("No href found for this row.");
      }
    });
  });
});






