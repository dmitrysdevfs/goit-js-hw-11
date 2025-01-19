export const createdGalleryCardTemplate = imgInfo => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${imgInfo.largeImageURL}">
        <img
          class="gallery-image"
          src="${imgInfo.webformatURL}"
          alt=""
        />
      </a>
    </li>
  `;
};
