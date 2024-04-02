const showMore = document.querySelector('.load-more__btn');
const linkLength = document.querySelectorAll('.portfolio-grid__link').length;
let items = 22;

showMore.addEventListener('click', () => {
    items+=12;
    const array = Array.from(document.querySelector('.portfolio-grid').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === linkLength) {
        showMore.style.display = 'none';
    }
});