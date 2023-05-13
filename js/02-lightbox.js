import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          data-source="${original}"
        />
      </a>
    </li>
  `;
}

function renderGallery(items) {
  const galleryMarkup = items.map(createGalleryItem).join('');
  galleryContainer.innerHTML = galleryMarkup;
}

renderGallery(galleryItems);

// Ініціалізація бібліотеки SimpleLightbox з додаванням підписів та затримкою
const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});



