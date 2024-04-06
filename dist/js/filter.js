document.addEventListener('DOMContentLoaded', () => {
	/*
		1. по клику на пункты верхнего меню открывать дропдаун
		2. по клику (повторному) на эти пункты - закрывать дропдаун
		3. по клику в любое место сайта, кроме меню - закрывать дропдаун
	*/

	const menuBtns = document.querySelectorAll('.filter__btn');
	const drops = document.querySelectorAll('.dropdown');

	menuBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.filter__item').querySelector('.dropdown');

			menuBtns.forEach(el => {
				if (el !== currentBtn) {
					el.classList.remove('filter__btn--active');
				}
			});

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('dropdown--active');
				}
			});

			drop.classList.toggle('dropdown--active');
			currentBtn.classList.toggle('filter__btn--active');
		});
	});
});

function filterItems() {
    const checkbox = document.getElementById('filming-tg');
    const items = document.getElementsByClassName('portfolio__grid');

    for (let item of items) {
        if (checkbox.checked && !item.classList.contains('filming')) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    }
}

function resetFilter() {
    const checkbox = document.getElementById('filming');
	
    const items = document.getElementsByClassName('portfolio__grid');

    checkbox.checked = false;

    for (let item of items) {
        item.style.display = 'block';
    }
}

