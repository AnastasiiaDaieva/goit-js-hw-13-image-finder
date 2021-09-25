import Notiflix from 'notiflix';
import handleModal from './handleModal';
import form from '../templates/form.hbs';
import gallery from '../templates/gallery.hbs';
import imgcard from '../templates/imgcard.hbs';
import funcs from './apiService';
const { fetchImages, fetchMoreImages } = funcs;
import refs from './refs';
const { btnLoad, btnForm, searchContainer, listContainer } = refs;

Notiflix.Notify.init({
  fontSize: '16px',
  warning: { background: 'rgba(3, 13, 71, 0.8)', notiflixIconColor: 'rgba(255,255,255,0.2)' },
});
console.log(btnLoad);

function renderForm() {
  let markup = form();
  searchContainer.insertAdjacentHTML('afterbegin', markup);
}

renderForm(form);

const searchForm = document.querySelector('.search-form');
const inputAccess = document.getElementById('search');
// console.log(inputAccess);

function createHeading(queryRef) {
  const elementExists = document.querySelector('.list__heading');
  console.log(elementExists);
  if (elementExists == null) {
    const createHeading = document.createElement('h2');
    createHeading.classList.add('list__heading');
    createHeading.textContent = `Search results for "${queryRef}"`;
    listContainer.insertAdjacentElement('afterbegin', createHeading);
  } else {
    return;
  }
}

function renderGallery(dataRef, queryRef) {
  console.log(dataRef);

  const { hits, total } = dataRef;
  createHeading(queryRef);
  const listMarkup = gallery();
  listContainer.insertAdjacentHTML('beforeend', listMarkup);
  const galleryAccess = document.querySelector('.gallery');
  hits.map(item => {
    const newCard = imgcard(item);
    galleryAccess.insertAdjacentHTML('beforeend', newCard);
  });
  manageLoadButton(total);
  galleryAccess.addEventListener('click', handleModal);
}

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
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

function manageLoadButton(totalNumber) {
  if (totalNumber <= 12) {
    return;
  } else {
    btnLoad.classList.remove('visually-hidden');
  }
}

// console.log(btnForm);
// console.log(searchForm);
