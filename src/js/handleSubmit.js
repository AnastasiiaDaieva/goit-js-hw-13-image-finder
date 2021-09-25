import renderGallery from './renderGallery';

import funcs from './apiService';
const { fetchImages, fetchMoreImages } = funcs;
import refs from './refs';
const { btnLoad, btnForm, searchContainer, listContainer } = refs;

export default function handleSubmit(e) {
  e.preventDefault();
  console.log(e.target.elements.search.value.trim());
  let query = e.target.elements.search.value.trim();

  if (query == '') {
    Notiflix.Notify.warning('Enter the query please!');
  } else {
    fetchImages(query).then(data => renderGallery(data, query));
    listContainer.innerHTML = '';
    btnLoad.addEventListener('click', e => {
      fetchMoreImages(query).then(data => renderGallery(data, query));
    });
  }
}
