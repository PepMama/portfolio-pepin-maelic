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

// Animer la progresse barre pour les compétences 
const progresseBarElements = document.querySelectorAll('.progress-bar');
const option = {
  rootMargin: "0px",
  threshold: 0.5
};

const observerProgressBar = new IntersectionObserver((entries, observerProgressBar) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const progressBar = entry.target;
      const progress = progressBar.getAttribute('data-progress');
      progressBar.style.width = `${progress}%`;
      progressBar.style.transition = 'width 1s ease-in-out';
      observerProgressBar.unobserve(progressBar);
    }
  });
}, option);

progresseBarElements.forEach(progressBar => {
  observerProgressBar.observe(progressBar);
}); 



