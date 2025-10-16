// Crée le swiper compétences
const competencesSwiper = new Swiper('.competences-swiper', {
  direction: 'horizontal', // Ça défile à l’horizontale
  slidesPerView: 3,       // 3 slides visibles
  spaceBetween: 30,       // Espace entre chaque slide
  scrollbar: {
    el: '.swiper-scrollbar', // Barre de scroll
    draggable: true,         // On peut la bouger
  },
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 20 },   // Petit écran
    768: { slidesPerView: 3, spaceBetween: 30 },   // Tablette
    1024: { slidesPerView: 5, spaceBetween: 40 }   // Grand écran
  }
});


const appli = Vue.createApp({
  data() {
    return {
      projects: []  // Tableau vide pour les projets
    };
  },
  mounted() {
    console.log("L'app Vue a été créée et montée au DOM (mounted) !");

    // Fetch des données depuis le fichier projects.json
    fetch('./projects.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then(data => {
        this.projects = data;  // Remplir le tableau 'projects' avec les données
        console.log(this.projects);  // Afficher les données dans la console pour vérifier
      })
      .catch(error => {
        console.error("Erreur:", error);
      });
  },
  methods: {
    // Méthodes supplémentaires si besoin
  }
});

// Monter l'application Vue.js dans le DOM
appli.mount('#projet');





/*Exemples Prof https://tim-montmorency.com/timdoc/582-424MO/swiper/swiper/ */

/*Exemple 1*/
/*const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
})*/


/*Exemple 2*/
/*const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});*/