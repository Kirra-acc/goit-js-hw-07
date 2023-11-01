import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');
const markup = galleryItems.reduce(
    (acc, { original, preview, description }) =>
      (acc += `<li>
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`),
    ''
  );
  
  container.insertAdjacentHTML('beforeend', markup);
  
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

console.log(galleryItems);


// 2 option
// import { galleryItems } from './gallery-items.js';

// const container = document.querySelector('.gallery');
// const markup = createGalleryMarkup(galleryItems);
// container.insertAdjacentHTML('beforeend', markup);

// function createGalleryMarkup(items) {
//     return items
//     .map(({ preview, original, description }) => {
//         return `<div class="gallery__item">
//           <a class="gallery__link" href="${original}">
//               <img
//               class="gallery__image"
//               src="${preview}"
//               data-source="${original}"
//               alt="${description}"
//               />
//           </a>
//           </div>`;
//     })
//       .join('');
// }

// let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt',
// captionDelay: 250,
// });

// console.log(galleryItems);