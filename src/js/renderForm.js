import form from '../templates/form.hbs';
import refs from './refs';
const { searchContainer } = refs;

export default function renderForm() {
  let markup = form();
  searchContainer.insertAdjacentHTML('afterbegin', markup);
}
