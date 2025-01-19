import { createdGalleryCardTemplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';
import SimpleLightbox from 'simplelightbox';

const searchFormEl = document.querySelector('.js-form');
const galleryEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.search_query.value.trim();

  if (searchedQuery === '') {
    alert('The field must be filled!');

    return;
  }

  fetchPhotosByQuery(searchedQuery)
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

      galleryEl.innerHTML = galleryTemplate;

      let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDellay: 250,
      });

      lightbox.refresh();
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
