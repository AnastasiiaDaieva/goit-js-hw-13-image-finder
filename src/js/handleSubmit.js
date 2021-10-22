import Notiflix from 'notiflix';
import createHeading from './createHeading';

import apiService from './apiService';
import request from './request';
import refs from './refs';
const { btnLoad, listContainer } = refs;

export default function handleSubmit(e) {
  e.preventDefault();

  const checkQuery = e.target.elements.search.value.trim();
  apiService.query = checkQuery;

  listContainer.innerHTML = '';
  apiService.resetPageNumber();
  if (checkQuery == '') {
    btnLoad.classList.add('visually-hidden');
    Notiflix.Notify.warning('Enter the query please!');
  } else {
    createHeading(checkQuery);
    request();
  }
}
