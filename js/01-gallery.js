import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);




const galleryRef = document.querySelector('.gallery');
galleryRef.innerHTML = createGalleryMarkup(galleryItems);

galleryRef.addEventListener('click', openOriginalImage)

const imgRef = document.querySelector('.gallery__image')

function createGalleryMarkup(gallery) {
   return galleryItems.map(({original, preview, description}) => `
<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`).join('');
}


function openOriginalImage(event) {
if (event.target.nodeName !== 'IMG') {
   return;
}
   event.preventDefault();
   event.target.src = event.target.dataset.source;

   const instance = basicLightbox.create(`<img src="${event.target.src}">`, {
      onShow: instance => {
         document.onkeydown = function (e) {
            e.preventDefault();
            if (e.code === 'Escape') {
               instance.close();
            }
         }
      }
   });

   instance.show();
}
