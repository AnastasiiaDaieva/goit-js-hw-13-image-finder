import Notiflix from 'notiflix';
import handleSubmit from './handleSubmit';
import form from '../templates/form.hbs';
import request from './request';

import renderForm from './renderForm';
import refs from './refs';
const { btnLoad } = refs;
Notiflix.Notify.init({
  fontSize: '16px',
  warning: { background: 'rgba(3, 13, 71, 0.8)', notiflixIconColor: 'rgba(255,255,255,0.2)' },
});

renderForm(form);

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', handleSubmit);

btnLoad.addEventListener('click', e => {
  request();
});
