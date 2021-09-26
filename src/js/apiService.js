import Notiflix from 'notiflix';
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '23531219-4793e7ad626a6d166b9f03b8c';
const params = '?image_type=photo&orientation=horizontal';

export default {
  pageNumber: 1,
  searchQuery: '',
  fetchImages() {
    const url = `${BASE_URL}/${params}&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=${API_KEY}`;
    console.log(url);
    return fetch(url)
      .then(response => {
        if (response.ok) return response.json();
      })
      .then(data => {
        this.pageNumber += 1;

        return data;
      })
      .catch(err => Notiflix.Notify.failure(`${err}`));
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },

  resetPageNumber() {
    this.pageNumber = 1;
  },
};
