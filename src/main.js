const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://pixabay.com/api/';

const searchFormEl = document.querySelector('.js-form');
const galleryEl = document.querySelector('.js-gallery');

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

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.search_query.value.trim();

  if (searchedQuery === '') {
    alert('The field must be filled!');

    return;
  }

  console.log(searchedQuery);

  fetch(
    `${BASE_URL}?key=${apiKey}&q=${searchedQuery}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      if (data.total === 0) {
        alert(
          'Sorry, there are no images matching your search query. Please try again!'
        );

        galleryEl.innerHTML = '';

        searchFormEl.reset();

        return;
      }

      const galleryTemplate = data.hits
        .map(el => createdGalleryCardTemplate(el))
        .join('');

      console.log(galleryTemplate);
      galleryEl.innerHTML = galleryTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

console.log(galleryEl);

searchFormEl.addEventListener('submit', onSearchFormSubmit);
