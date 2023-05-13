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

galleryContainer.addEventListener('click', handleImageClick);

let instance = null;

function handleImageClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const originalImageURL = event.target.dataset.source;
    const description = event.target.getAttribute('alt');
    
    instance = basicLightbox.create(`
      <div class="modal">
        <img class="modal__image" src="${originalImageURL}" alt="${description}" />
      </div>
    `);
    
    instance.show();
    document.addEventListener('keydown', handleKeyDown);
  }
}

function handleKeyDown(event) {
  if (event.key === 'Escape' && instance) {
    instance.close();
    document.removeEventListener('keydown', handleKeyDown);
  }
}
