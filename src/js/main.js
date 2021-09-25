import Notiflix from 'notiflix';
import form from '../templates/form.hbs';
import gallery from '../templates/gallery.hbs';
import fetchImages from './fetchImages';
import refs from './refs';
const { btnLoad, btnForm, searchContainer } = refs;
console.log(btnLoad);

function renderForm() {
  let markup = form();
  searchContainer.insertAdjacentHTML('afterbegin', markup);
}

renderForm(form);
const searchForm = document.querySelector('.search-form');
const inputAccess = document.getElementById('search');
// console.log(inputAccess);
function renderGallery(dataRef) {
  console.log(dataRef);
  dataRef.map(item => {
    let markup = gallery(item);
    searchContainer.insertAdjacentHTML('beforeend', markup);
  });
}
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.target.elements.search.value.trim());
  let query = e.target.elements.search.value.trim();
  fetchImages(query).then(data => renderGallery(data));
});

// console.log(btnForm);
// console.log(searchForm);
