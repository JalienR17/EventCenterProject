const openOverlayContact = document.getElementById('openOverlayContact');
const overlayContact = document.getElementById('overlayContact');
const overlayContactContent = document.getElementById('overlayContactContent');
const closeOverlayContact = document.getElementById('closeOverlayContact');
const iframeContact = document.getElementById('iframeContact');

overlayContact.style.display = 'none';
overlayContact.style.position = 'fixed';
overlayContact.style.top = '0';
overlayContact.style.right = '0';
overlayContact.style.width = '100%';
overlayContact.style.height = '100%';
overlayContact.style.zIndex = '11';


overlayContactContent.style.position = 'fixed';
overlayContactContent.style.top = '0';
overlayContactContent.style.right = '0';
overlayContactContent.style.width = 'auto';
overlayContactContent.style.height = 'auto';


iframeContact.style.position = 'fixed';
iframeContact.style.top = '25%';
iframeContact.style.right = '25%';
iframeContact.style.bottom = '25%';
iframeContact.style.left = '25%';
iframeContact.style.width = '45%';
iframeContact.style.height = '55%';
iframeContact.style.overflow = 'auto';

openOverlayContact.addEventListener('click', (event) => {
  event.preventDefault();
  overlayContact.style.display = 'block';
});

closeOverlayContact.addEventListener('click', () => {
  overlayContact.style.display = 'none';
});

overlayContact.addEventListener('click', (event) => {
  if (event.target === overlayContact) {
    overlayContact.style.display = 'none';
  }
});


