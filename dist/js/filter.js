document.addEventListener('DOMContentLoaded', () => {

	const menuBtn1 = document.querySelectorAll('.filter__btn.fil1');
	const menuBtn2 = document.querySelectorAll('.filter__btn.fil2');
	const drops = document.querySelectorAll('.dropdown.fil1');

	menuBtn1.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.scroll-menu').querySelector('.dropdown.fil2');

			menuBtn1.forEach(el => {
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
	
	menuBtn2.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.scroll-menu').querySelector('.dropdown.fil1');

			menuBtn2.forEach(el => {
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
    const checkbox = document.getElementById('filming');
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

