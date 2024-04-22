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


const checkboxes = document.querySelectorAll('.checkbox');
const filters = document.querySelectorAll('.portfolio__grid');
const resetButton = document.getElementById('filter__reset');

resetButton.addEventListener('click', function() {
	checkboxes.forEach(checkbox => {
		checkbox.checked = false;
	});

	filters.forEach(filter => {
		filter.style.display = 'block';
	});
});

checkboxes.forEach(checkbox => {
	checkbox.addEventListener('change', function() {
		filters.forEach(filter => {
			let isVisible = false;
			checkboxes.forEach(cb => {
				if (cb.checked && filter.classList.contains(cb.getAttribute('id'))) {
					isVisible = true;
				}
			});
			if (!isVisible && document.querySelectorAll('.checkbox:checked').length === 0) {
				filter.style.display = 'block';
			} else {
				filter.style.display = isVisible ? 'block' : 'none';
			}
		});
	});
});
