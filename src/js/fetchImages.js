const API_KEY = '23531219-4793e7ad626a6d166b9f03b8c';

const BASE_URL = `https://pixabay.com/api/`;
const params = `?image_type=photo&orientation=horizontal&q=`;
export default function fetchImages(searchQuery) {
  let pageNumber = 1;

  return fetch(
    `${BASE_URL}${params}${searchQuery}&page=${pageNumber}&per_page=12&key=${API_KEY}`,
  ).then(response => {
    if (response.ok) return response.json();
  });
}
