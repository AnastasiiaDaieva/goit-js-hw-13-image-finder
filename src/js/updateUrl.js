import refs from './refs';
const { btnLoad } = refs;

export default function updateUrl(pageNumber) {
  const btnForm = document.querySelector('.form__button');
  btnForm.addEventListener('click', e => {
    pageNumber = 1;
  });
  btnLoad.addEventListener('click', e => {
    pageNumber += 1;
  });
}
