
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