import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);
container.insertAdjacentHTML('beforeend', markup);
container.addEventListener('click', onImgClick);

// rendered items
function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

const instance = basicLightbox.create(
    `<img width="1280" height="auto" src="">`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );
  
  function onImgClick(e) {
    e.preventDefault();
    const datasetSource = e.target.dataset.source;
    if (!datasetSource) return;
    instance.element().querySelector('img').src = datasetSource;
    instance.show();
  }
  
  function onEscKeyPress(e) {
    if (e.code !== 'Escape') return;
    instance.close();
  }



// 2nd option
// import { galleryItems } from './gallery-items.js';
// // exporting array
//   const gallery = document.querySelector('.gallery');
  
//   renderGalleryItems();
  
//   function renderGalleryItems() {
//     // clearing content
//     gallery.innerHTML = '';
  
//     galleryItems.forEach((item) => {
//       const li = document.createElement('li');
//       const a = document.createElement('a');
//       const img = document.createElement('img');
  
//       a.href = item.original;
//       img.src = item.preview;
//       img.alt = item.description;
  
//       img.classList.add('gallery__image');
//       a.classList.add('gallery__link');
//       li.classList.add('gallery__item');

//       const modal = document.createElement('div');
//         modal.classList.add('modal');

//         const modalImg = document.createElement('img');
//         modalImg.src = item.original;
//         modalImg.alt = item.description;

//         modal.appendChild(modalImg);

//         a.addEventListener('click', () => {
//         modal.classList.add('show');

//         modal.addEventListener('click', (event) => {
//             if (event.target === modal) {
//             modal.classList.remove('show');
//             }
//         });
//         });

//         a.appendChild(img);
//         li.appendChild(a);

//         gallery.appendChild(li);

//         // Append the modal window to the body of the document
//         document.body.appendChild(modal);
//     });
// }
// ----not nessesary
//       a.addEventListener('click', () => {
//         const imgUrl = item.original;
  
//         a.href = '';
//         basicLightbox.open({
//             items: [
//               {
//                 src: imgUrl,
//               },
//             ],
//             img: {
//               src: imgUrl,
//             },
//           });
//         });
  
//       a.appendChild(img);
//       li.appendChild(a);
  
//       gallery.appendChild(li);
//     });
//   }
  
//   function initLightbox() {
//     const script = document.createElement('script');
//     script.src = 'https://cdn.jsdelivr.net/npm/basic-lightbox@2.1.1/dist/basic-lightbox.min.js';
//     document.body.appendChild(script);
  
//     const link = document.createElement('link');
//     link.href = 'https://cdn.jsdelivr.net/npm/basic-lightbox@2.1.1/dist/basic-lightbox.min.css';
//     link.rel = 'stylesheet';
//     document.head.appendChild(link);
  
//     document.addEventListener('keydown', (event) => {
//         if (event.key === 'Escape') {
//           basicLightbox.close();
//         }
//       });
//     }
//   initLightbox();
  console.log(galleryItems);