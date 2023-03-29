// Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryRef = document.querySelector('.gallery');

function createMarkup(array) {
  return array.reduce(
    (acc, item) =>
      acc +
      `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`,
    ''
  );
}

const markupIsDone = createMarkup(galleryItems);

galleryRef.insertAdjacentHTML('afterbegin', markupIsDone);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Change code below this line



