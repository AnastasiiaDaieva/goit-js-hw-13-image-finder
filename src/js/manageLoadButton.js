import refs from './refs';
const { btnLoad, btnForm, searchContainer, listContainer } = refs;

export default function manageLoadButton(totalNumber, leftNumber) {
  if (totalNumber <= 12) {
    return;
  } else if (leftNumber.length === 0) {
    btnLoad.classList.add('visually-hidden');
  } else {
    btnLoad.classList.remove('visually-hidden');
  }
}
