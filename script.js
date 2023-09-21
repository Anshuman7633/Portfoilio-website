// Script to highlight the active navigation link
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    link.classList.add('active');
  });
});

// Script to display a confirmation message when downloading CV
const cvDownloadLink = document.getElementById('cv-download');

cvDownloadLink.addEventListener('click', event => {
  const confirmationMessage = confirm('Do you want to download the CV?');

  if (!confirmationMessage) {
    event.preventDefault();
  }
});
