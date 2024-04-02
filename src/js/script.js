const elem = document.querySelector('.portfolio-grid');
const iso = new Isotope( elem, {
  // options
  itemSelector: '.portfolio-grid__item',
  layoutMode: 'masonry',
});

imagesLoaded( elem ).on( 'progress', function() {
    // layout Isotope after each image loads
    iso.layout();
  });
