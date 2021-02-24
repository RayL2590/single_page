// Initialisation de la map
function initMap() {
  // Ajout de la localisation
  const loc = { lat: 42.361145, lng: -71.057083 };
  // Centrage de la map sur la localisation
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // Ajout du marqueur
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Background de la navbar qui change un peu d'opacité
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Scrolling doux
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});