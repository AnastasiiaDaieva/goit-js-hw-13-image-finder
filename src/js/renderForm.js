import form from '../templates/form.hbs';
import refs from './refs';
const { btnLoad, btnForm, searchContainer, listContainer } = refs;

export default function renderForm() {
  let markup = form();
  searchContainer.insertAdjacentHTML('afterbegin', markup);
}
