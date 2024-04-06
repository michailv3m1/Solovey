const showMore = document.querySelector('.btn.btn--load-more');
const productsLength = document.querySelectorAll('.portfolio__grid').length;
let items = 13;

showMore.addEventListener('click', () => {
	items += 13;
	const array = Array.from(document.querySelector('.portfolio').children);
	const visItems = array.slice(0, items);

	visItems.forEach(el => el.classList.add('is-visible'));

	if (visItems.length === productsLength) {
		showMore.style.display = 'none';
	}
});