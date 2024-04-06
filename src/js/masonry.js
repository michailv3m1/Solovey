
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

// const grid = document.getElementById('masonry-grid');
// const images = ['img/preview/Araneobit.jpg', 'img/preview/Mask group (1).jpg', 'img/preview/Mask group (4).jpg', 'img/preview/Mask group (5).jpg', 'img/preview/Mask group (6).jpg', 'img/preview/Mask group (6).jpg', ]; // Пути к изображениям
//     images.forEach(image => {
//         const item = document.createElement('div');
//         item.classList.add('portfolio__item');
            
//         const img = document.createElement('img');
//         img.src = image;
//         img.classList.add('portfolio__img');
            
        // item.appendChild(img);
        // grid.appendChild(item);
// });