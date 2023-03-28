// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');

function createMarkup(array) {
  return array.reduce(
    (acc, item) =>
      acc +
      `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`,
    ''
  );
}

const markupIsDone = createMarkup(galleryItems);

galleryRef.insertAdjacentHTML('afterbegin', markupIsDone);

function clickOnImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"/>`
  );
  instance.show();

  function onEscPress(event) {
    if (event.key === 'Escape') {
      instance.close();
      galleryRef.removeEventListener('keydown', onEscPress);
    }
  }

  galleryRef.addEventListener('keydown', onEscPress);
}

galleryRef.addEventListener('click', clickOnImage);








