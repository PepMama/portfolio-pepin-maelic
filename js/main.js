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

// On commence par créer un nouveau IntersectionObserver
const ratio = 0.1
const options = {
    root: null, // élément racine, permet de détecter si l'element sera visible ou non
    rootMargin: '0px', 
    threshold: ratio // dès que 10% de l'élément est visible, on va déclencher les animations
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function (r) {
  observer.observe(r)
})

document.querySelectorAll('.reveal-reverse').forEach(function (r) {
  observer.observe(r)
})

