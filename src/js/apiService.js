import Notiflix from 'notiflix';

const API_KEY = '23531219-4793e7ad626a6d166b9f03b8c';

const BASE_URL = `https://pixabay.com/api/`;
const params = `?image_type=photo&orientation=horizontal&q=`;
let pageNumber = 1;

const funcs = {
  fetchImages(searchQuery) {
    let url = `${BASE_URL}${params}${searchQuery}&page=${pageNumber}&per_page=12&key=${API_KEY}`;
    return fetch(url)
      .then(response => {
        if (response.ok) return response.json();
      })
      .catch(err => Notiflix.Notify.failure(`${err}`));
  },

  fetchMoreImages(searchQuery) {
    pageNumber += 1;
    let url = `${BASE_URL}${params}${searchQuery}&page=${pageNumber}&per_page=12&key=${API_KEY}`;
    console.log(url);
    return fetch(url)
      .then(response => {
        if (response.ok) return response.json();
      })
      .catch(err => Notiflix.Notify.failure(err));
  },
};

export default funcs;
