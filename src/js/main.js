import Notiflix from 'notiflix';
import form from '../templates/form.hbs';
import gallery from '../templates/gallery.hbs';
import imgcard from '../templates/imgcard.hbs';
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
  console.log(dataRef.hits);
  const listMarkup = gallery();
  searchContainer.insertAdjacentHTML('beforeend', listMarkup);
  const galleryAccess = document.querySelector('.gallery');
  dataRef.hits.map(item => {
    const newLi = document.createElement('li');
    console.log(newLi);
    newLi.classList.add('gallery__item');
    const newCard = imgcard(item);
    newLi.append(newCard);
    galleryAccess.insertAdjacentHTML('beforeend', newLi);
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
