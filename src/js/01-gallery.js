// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryEl = galleryItems.map((item) => `<div class="gallery__item"><a class="gallery__link" href="${item.original}">
<img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"></a></div>`).join("");
gallery.insertAdjacentHTML('beforeend', galleryEl)

const lightbox = new SimpleLightbox(".gallery__link", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250
});
