import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(`.gallery`)

function galleryMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
     <li class="gallery__item">
      <a href="${original}" class="gallery__link">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
       </a>
    </li>`).join(``)
}
galleryContainer.insertAdjacentHTML(`beforeend`, galleryMarkup(galleryItems))
galleryContainer.addEventListener(`click`, imageClick)

function imageClick(evt) {
    evt.preventDefault()
    if (evt.target === evt.currentTarget) {
        return
    }
    const largeImage = evt.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${largeImage}">
`)
    instance.show()
    galleryContainer.addEventListener(`keydown`, evt => {
        if (evt.code === `Escape`) {
            instance.close()
        }
    })
}


