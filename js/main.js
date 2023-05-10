const liensMenu = document.querySelectorAll('.menu--links a');

for (let lien of liensMenu) {
  lien.addEventListener('click', (event) => {
    event.preventDefault();
    const cible = document.querySelector(lien.getAttribute('href'));
    cible.scrollIntoView({
      behavior: 'smooth'
    });
  });
}

