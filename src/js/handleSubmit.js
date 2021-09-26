import Notiflix from 'notiflix';

import apiService from './apiService';
import request from './request';
import refs from './refs';
const { listContainer } = refs;

export default function handleSubmit(e) {
  e.preventDefault();

  apiService.query = e.target.elements.search.value.trim();
  const checkQuery = e.target.elements.search.value.trim();

  listContainer.innerHTML = '';
  apiService.resetPageNumber();
  if (checkQuery == '') {
    Notiflix.Notify.warning('Enter the query please!');
  } else {
    request();
  }
}
