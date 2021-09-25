import Notiflix from 'notiflix';
import handleSubmit from './handleSubmit';
import form from '../templates/form.hbs';
import renderForm from './renderForm';

Notiflix.Notify.init({
  fontSize: '16px',
  warning: { background: 'rgba(3, 13, 71, 0.8)', notiflixIconColor: 'rgba(255,255,255,0.2)' },
});

renderForm(form);

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', handleSubmit);
